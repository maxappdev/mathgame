call react-native bundle --dev false --platform android --entry-file index.js --bundle-output ./android/app/src/main/assets/index.android.bundle --assets-dest ./android/app/src/main/res
call cd android
call gradlew assembleDebug
call cd C:\xampp\htdocs\mathgame\mathgame