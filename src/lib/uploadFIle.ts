import { initializeApp } from 'firebase/app';
import { getStorage, ref as refStorage, uploadBytes, getDownloadURL } from 'firebase/storage';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyArBDTJDOgx40S_abskkdREx9ADjUwrT9Q",
    authDomain: "instagram-clone-d3b8e.firebaseapp.com",
    projectId: "instagram-clone-d3b8e",
    storageBucket: "instagram-clone-d3b8e.appspot.com",
    messagingSenderId: "697229175300",
    appId: "1:697229175300:web:4fb62562b6008e355ca351"
};

initializeApp(firebaseConfig);

const firebaseStorage = getStorage();

async function uploadFile (file: File) {
    try {
        const storageRef = refStorage(firebaseStorage, `images/${file.name}`);
        await uploadBytes(storageRef, file);
        const url = await getDownloadURL(storageRef);
        return url;
    } catch (error) {
        console.log("Upload file error:", error);
    }
}

export default uploadFile;