package com.example.mobileicp3;

import android.util.Log;

import org.json.JSONArray;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import java.util.ArrayList;
import java.util.List;

public class QueryUtils {
    /**
     * Tag for the log messages
     */
    private static final String LOG_TAG = QueryUtils.class.getSimpleName();

    /**
     * Create a private constructor because no one should ever create a {@link QueryUtils} object.
     * This class is only meant to hold static variables and methods, which can be accessed
     * directly from the class name QueryUtils (and an object instance of QueryUtils is not needed).
     */
    private QueryUtils() {
    }

    /**
     * Query the USGS dataset and return a list of {@link Earthquake} objects.
     */
    public static List<Earthquake> fetchEarthquakeData2(String requestUrl) {
        // An empty ArrayList that we can start adding earthquakes to
        List<Earthquake> earthquakes = new ArrayList<>();
        //  URL object to store the url for a given string
        URL url = null;
        // A string to store the response obtained from rest call in the form of string
        String jsonResponse = "";
        StringBuilder sb = new StringBuilder();
        BufferedReader bufReader;
        URLConnection urlConnection;
        try {
            //TODO: 1. Create a URL from the requestUrl string and make a GET request to it
            url = new URL(requestUrl);

            //TODO: 2. Read from the Url Connection and store it as a string(jsonResponse)
            urlConnection = url.openConnection();
            bufReader = new BufferedReader(new InputStreamReader(urlConnection.getInputStream()));
            String line;
            while ((line = bufReader.readLine()) !=  null) {
                // Appending the Line to StringBuilder
                sb.append(line);
            }
            // Closing Buffered Reader.
            if(bufReader != null){
                bufReader.close();
            }
            // Converting string builder to String and using it as JSON Response.
            jsonResponse = sb.toString();

            /*TODO: 3. Parse the jsonResponse string obtained in step 2 above into JSONObject to extract the values of
                "mag","place","time","url"for every earth quake and create corresponding Earthquake objects with them
                Add each earthquake object to the list(earthquakes) and return it.
            */

            // Parsing the JSON Response.
            JSONObject jsonObject = new JSONObject(jsonResponse);
            // Fetching 'features' array.
            JSONArray jsonArray = (JSONArray) jsonObject.get("features");
            // Iterating the 'features' list
            for(int i =0;i < jsonArray.length(); i++) {
                // Getting json Object 'properties'
                JSONObject json = jsonArray.getJSONObject(i).getJSONObject("properties");
                System.out.println(json);
                System.out.println(json.get("mag"));
                // Passing Data to Constructor
                Earthquake earthquake = new Earthquake((double) json.getDouble("mag"), (String) json.get("place"), (long) json.get("time"), (String) json.get("url"));
                // Adding each 'EarthQuake' Object to List created.
                earthquakes.add(earthquake);
            }
        } catch (Exception e) {
            Log.e(LOG_TAG, "Exception:  ", e);
        }
        // Return the list of earthquakes
        return earthquakes;
    }
}
