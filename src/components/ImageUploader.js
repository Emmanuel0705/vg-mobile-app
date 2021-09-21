import {Alert, View} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

let openImagePickerAsync = async () => {
  let permissionResult =
    await ImagePicker.requestMediaLibraryPermissionsAsync();

  if (permissionResult.granted === false) {
    Alert.alert('Permission to access camera roll is required!');
    return;
  }

  let pickerResult = await ImagePicker.launchImageLibraryAsync();

  if (pickerResult.type === 'image') {
    const extension = pickerResult.uri.split('.').pop();
    if (extension === 'png' || extension === 'jpg') {
      //   setExt(extension);
      //   setImage(pickerResult.uri);
      return;
    }
  }
  Alert.alert('Invalid!', 'Invalid image type selected');
};
export default openImagePickerAsync;
