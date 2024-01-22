import { useEffect, useState } from "react";
import data from "./Data";
import StudentCard from "./StudentCard";
import axios from 'axios'
function App() {
  const [newData, setNewData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    Language1: "",
    English: "",
    Maths: "",
    Science: "",
    Social: "",
    classD: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedStudentId(null);
  };

  const activeModal =async (id) => {

   
      
      console.log("selectedStudentId:", id);
      
    
        try {
          const response = await axios.post(`http://localhost:5000/getastudent/${id}`);
          console.log("Response:", response);
    
          if (response.data.success) {
            console.log(response);
            setSelectedStudentId(response.data.data);
            setShowModal(true);
          } else {
            console.log('wrong');
          }


        } catch (error) {
          console.log(error);
        }
      
    

  }


  const handleSave = async (e) => {
    e.preventDefault();

    try {
      if (
        !formData.English ||
        !formData.Language1 ||
        !formData.Science ||
        !formData.Social ||
        !formData.classD ||
        !formData.Maths ||
        !formData.name
      ) {
        return;
      }
      const response = await axios.post("http://localhost:5000/addStudentDetails", formData)
   

      if (response.data.success) {
        getData()
      } else {
        console.log('wrong')
      }       

  } catch (error) {
    console.log(error);

  }

  }


  const getData = async() => {

    try {
      
      
      const response = await axios.get("http://localhost:5000/getStudentsdetails")
      if (response.data.success) {
        console.log(response)
        setNewData(response.data.data)
      } else {
        console.log('wrong')
      }
      
      
    } catch (error) {
        console.log(error)
    }
  }


  useEffect(() => {
    getData()

  }, []);








  return (
    <>
      <div className=" m-10">
        <div className="w-full flex justify-center items-center">
          <form onClick={handleSave}>
            <div className="w-max h-max border-solid border-2 p-8 border-sky-500 grid grid-cols-2 gap-4">
              <div>
                <div className="space-y-4 text-sm">
                  <div>
                    <label
                      htmlFor="studentName"
                      className="block dark:text-gray-400"
                    >
                      Student Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="studentName"
                      placeholder="Student Name"
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="username2"
                      className="block dark:text-gray-400"
                    >
                      Language 1
                    </label>
                    <input
                      name="Language1"
                      id="username2"
                      placeholder="Language 1"
                      onChange={handleChange}
                      required
                      type="number"
                      className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="username3"
                      className="block dark:text-gray-400"
                    >
                      English
                    </label>
                    <input
                      name="English"
                      id="username3"
                      placeholder="English"
                      onChange={handleChange}
                      type="number"
                      required
                      className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="space-y-4 text-sm">
                  <div>
                    <label
                      htmlFor="studentName"
                      className="block dark:text-gray-400"
                    >
                      Maths
                    </label>
                    <input
                      required
                      type="number"
                      name="Maths"
                      id="studentName"
                      placeholder="Maths"
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="username1"
                      className="block dark:text-gray-400"
                    >
                      Science
                    </label>
                    <input
                      required
                      type="number"
                      name="Science"
                      id="username1"
                      placeholder="Science"
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="username2"
                      className="block dark:text-gray-400"
                    >
                      Social
                    </label>
                    <input
                      required
                      type="number"
                      name="Social"
                      id="username2"
                      placeholder="Social"
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="username2"
                      className="block dark:text-gray-400"
                    >
                      Class
                    </label>
                    <input
                      required
                      type="text"
                      name="classD"
                      id="username2"
                      placeholder="Class"
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-2">
                <button
                  type="button"
                  className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900 mt-4"
                >
                  ADD
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="h-screen flex justify-center items-center">
          <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
            <h2 className="mb-4 text-2xl font-semibold leadi">
              STUDENTS FROM Xth STD{" "}
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-xs">
                <thead className="dark:bg-gray-700">
                  <tr className="text-left">
                    <th className="p-3">SL NO </th>
                    <th className="p-3">Sudent Name</th>
                    <th className="p-3">Class</th>
                    <th className="p-3">Language 1</th>
                    <th className="p-3">English</th>
                    <th className="p-3">Maths</th>
                    <th className="p-3">Science</th>
                    <th className="p-3">Social</th>
                    <th className="p-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {newData.map((student, i) => (
                    <tr
                      key={i}
                      className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900"
                    >
                      <td className="p-3">
                        <p>{i + 1}</p>
                      </td>
                      <td className="p-3">
                        <p>{student.name}</p>
                      </td>
                      <td className="p-3">
                        <p>{student.classD}</p>
                      </td>
                      <td className="p-3">
                        <p>{student.Language1}</p>
                      </td>
                      <td className="p-3">
                        <p>{student.English}</p>
                      </td>
                      <td className="p-3">
                        <p>{student.Maths}</p>
                      </td>
                      <td className="p-3">
                        <p>{student.Science}</p>
                      </td>
                      <td className="p-3 ">
                        <p>{student.Social}</p>
                      </td>
                      <td className="p-3 ">
                        <button onClick={() => activeModal(student._id)}>
                          <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                            <span>VIEW</span>
                          </span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {showModal && (
            <StudentCard
              onClose={handleClose}
              visible={showModal}
              selectedStudentId={selectedStudentId}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
