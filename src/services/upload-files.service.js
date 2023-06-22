import http from "../http-common";

class UploadFilesService {
    upload(file, userId, onUploadProgress) {
        let formData = new FormData();

        formData.append("file", file);
        formData.append("userId", userId);
        

        return http.post("/upload", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            onUploadProgress,
        });
    }

    getFiles() {
        return http.get("/files");
    }
}

const uploadFilesService = new UploadFilesService();
export default uploadFilesService;