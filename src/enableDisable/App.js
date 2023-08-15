import React, { useState} from 'react';
import "./styles.css";

function App() {
    const [IsinputEnabeld,setIsinputEnabeld]=useState(false)
   
    const [initialData, setInitialData] = useState([
        { attribute1: 'Value 1', attribute2: 'Value 2', attribute3: 'Value 3' },
        { attribute1: 'Value 1', attribute2: 'Value 2', attribute3: 'Value 3' },
        { attribute1: 'Value 1', attribute2: 'Value 2', attribute3: 'Value 3' },
        { attribute1: 'Value 1', attribute2: 'Value 2', attribute3: 'Value 3' },
      
    ]);
    function Disable(){
       setIsinputEnabeld(false)
     
    }
    function Enable(){
        setIsinputEnabeld(true)
    }

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Attribute 1</th>
                        <th>Attribute 2</th>
                        <th>Attribute 3</th>
                        {/* Add more table headers as needed */}
                    </tr>
                </thead>
                <tbody>
                    {initialData.map((data, index) => (
                        <tr className="table-row" key={index}>
                            <td>
                                <input type="text" value={data.attribute1} readOnly  disabled={!IsinputEnabeld} />
                            </td>
                            <td>
                                <input type="text" value={data.attribute2} readOnly disabled={!IsinputEnabeld} />
                            </td>
                            <td>
                                <input type="text" value={data.attribute3} readOnly disabled={!IsinputEnabeld} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="button-container">
                <button onClick={Disable} disabled={!IsinputEnabeld}>
                    Disable
                </button>
                <button onClick={Enable} disabled={IsinputEnabeld}>
                    Enable
               </button>
            </div>
        </div>
    );
}

export default App;
