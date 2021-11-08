import React, { Fragment, useEffect,useState } from 'react';
import Navbar from './Navbar';
function Homepage() {
    const [newfile, setNewFile] = useState();
    const [data, setData] = useState([]);

    const addDocuments = () => {
        if(newfile) {
            setData([...data,newfile]);
        }
    }

    return (
        <Fragment>
            <Navbar />
            <div class="row d-flex justify-content-center align-items-center py-5">
                <div class="col-12 col-md-8 col-lg-6 col-xl-5" >
                    <div class="custom-file">
                        <input 
                            type="file" 
                            class="custom-file-input" 
                            id="customFileLang" 
                            lang="es" 
                            onChange={(e) => {
                                const file = e.target.files[0];
                                setNewFile(file);
                            }}
                        />
                        <label class="custom-file-label" for="customFileLang" data-browse="Select a document"></label>
                    </div>
                    <div class="row d-flex justify-content-center align-items-center py-3">
                        <button 
                            type="button" 
                            class="btn btn-primary" 
                            onClick={addDocuments}
                        >Upload</button>
                    </div>
                </div>
            </div>
            <hr></hr>
            <table class="table">
                <thead class="thead-light">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Filename</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((e,i)=>{
                        return (
                        <tr>
                            <th scope="row">{i+1}</th>
                            <td>{e.name}</td>
                        </tr>
                        )
                    })}
                </tbody>
                </table>
            

        </Fragment>
    )
}

export default Homepage
