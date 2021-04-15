package com.example.vijaya.androidhardware;

import android.content.Intent;
import android.graphics.Bitmap;
import android.provider.MediaStore;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;

public class CameraActivity extends AppCompatActivity {
    public static final int CAMERA_REQ = 01;
    Button cameraBtn;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_camera);
        cameraBtn = findViewById(R.id.btnCam);
        cameraBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                openCamera(view);
            }
        });
    }

    public void openCamera(View view) {
        Intent intent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
        startActivityForResult(intent, CAMERA_REQ);
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == CAMERA_REQ) {
            Bitmap bitmap = (Bitmap) data.getExtras().get("data");
            ImageView imgV = findViewById(R.id.imgView);
            imgV.setImageBitmap(bitmap);
        }
    }

    public void redirectToHome(View v) {
        Intent redirect = new Intent(CameraActivity.this, MainActivity.class);
        startActivity(redirect);
    }
}
