import http from "../http-common";

class UploadFilesService {
    upload(file, userId, onUploadProgress) {
        let formData = new FormData();

        formData.append("file", file);
        
        

        return http.post(`/upload/${userId}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            onUploadProgress,
        });
    }

    getFiles(userId) {
        return http.get(`/files/${userId}`);
    }
}

const uploadFilesService = new UploadFilesService();
export default uploadFilesService;