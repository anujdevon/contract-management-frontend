import axios from "axios";

const API_URL = 'http://localhost:8080';

class UploadFilesService {
    upload(file,userId, onUploadProgress) {

        
        let formData = new FormData();
        // console.log('userId: ',userId);
        formData.append("file", file);
        formData.append("userId",userId);
        
        
        // console.log(fileInfos);
        // console.log(file);
        
        

        return axios.post(`${API_URL}/upload/${userId}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                // 'Access-Control-Allow-Origin': '*',
                // 'Access-Control-Allow-Headers': '*',
                
            },
            onUploadProgress,
        });
    }

    getFiles() {
        return axios.get(`${API_URL}/files`);
    }
}

const uploadFilesService = new UploadFilesService();
export default uploadFilesService;