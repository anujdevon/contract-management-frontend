import React, { Component } from 'react';
import UploadService from '../services/upload-files.service';
import "./UploadFiles.css";

class UploadFiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFiles: undefined,
      progress: 0,
      message: '',
      userId: localStorage.getItem('userId'), 
      fileInfos: [],
    };
  }

  selectFile(event) {
    this.setState({
      selectedFiles: event.target.files,
    });
  }

  upload() {
    const user = JSON.parse(localStorage.getItem('user'));
    const {userId} = this.state;
    if(!userId){
        console.log('user not logged in');
        return;

    }
    let currentFile = this.state.selectedFiles[0];

    this.setState({
      progress: 0,
      message: '',
    });

    UploadService.upload(currentFile, userId, (event) => {
      this.setState({
        progress: Math.round((100 * event.loaded) / event.total),
      });
    })
      .then((response) => {
        const {fileInfos} = this.state;
        const existingFile = fileInfos.find(
          (file) => file.name === currentFile.name
        );

        if(existingFile){
          this.setState({
            message: "File updated successfully",
            selectedFiles: undefined,
          });
        } else {
        this.setState({
          message: "File uploaded successfully",
          selectedFiles: undefined,
        });
      }
        return UploadService.getFiles(user.id);
      })
      .then((response) => {
        this.setState({
          fileInfos: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          progress: 0,
          message: 'Could not upload the file!',
          selectedFiles: undefined,
        });
      });
  }

  componentDidMount() {
    // const user = JSON.parse(localStorage.getItem('user'));
    const {userId} = this.state;
    if(userId){
        UploadService.getFiles(userId).then((response) => {
            this.setState({
              fileInfos: response.data,
            });
          })
          .catch((error) => {
            console.log(error);
          });
    }
    
  }

  render() {
    const { selectedFiles, progress, message, fileInfos } = this.state;
    const {searchQuery} = this.props;

    const filterFileInfos = fileInfos.filter((file) =>
    file.name.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
      <div className='upload-files-container'>
        {selectedFiles && (
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={progress}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: progress + '%' }}
                >
                  {progress}%
                </div>
              </div>
        )}
            <label className="file-input-label">
              <input type="file" onChange={(e) => this.selectFile(e)} />
            </label>
          
            <button
              className="upload-button"
              disabled={!selectedFiles}
              onClick={() => this.upload()}
            >
              Upload
            </button>

        {message && <div className="upload-message">
                {message}
              </div>
        }

        <div className="file-list-container">
          <div className="file-list-header">List of Files:</div>
            <ul className="file-list">
              {
                filterFileInfos.map((file, index) => (
                  <li className="file-list-item" key={index}>
                    <a href={file.url}>{file.name}</a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
    );
  }
}

export default UploadFiles;

