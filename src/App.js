import logo from './logo.svg';
import './App.css';
import Catagories from './components/catagories';
import { useState } from "react";

function App() {
  let catagoriesData =
    [
      {
        "id": 1,
        "CatName": "CSPM",
        "Widget": [
          {
            "id": 1,
            "WidgetName": "Cloud Accounts",
            "WidgetContent": "okik"
          },
          {
            "id": 2,
            "WidgetName": "Cloud name",
            "WidgetContent": "okik"
          },

        ]
      },
      {
        "id": 2,
        "CatName": "CWSPM",
        "Widget": [
          {
            "id": 1,
            "WidgetName": "Cloud Accounts",
            "WidgetContent": "okik"
          },
          {
            "id": 2,
            "WidgetName": "Cloud name",
            "WidgetContent": "okik"
          },

        ]
      },
      {
        "id": 3,
        "CatName": "Cloud Properties",
        "Widget": [
          {
            "id": 1,
            "WidgetName": "Cloud Accounts",
            "WidgetContent": "okik"
          },
          {
            "id": 2,
            "WidgetName": "Cloud name",
            "WidgetContent": "okik"
          },

        ]
      }
    ]
  const [catagoryList, setCatagoryList] = useState(catagoriesData);
  const [selectedCategory, setSelectedCategory] = useState(catagoriesData[0].id);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const findElementIndex = () => {
    return catagoriesData.findIndex((x) => x.id == selectedCategory)
  }
  const handleTitleChange = (event) => {
    const value = event.target.value;
    setTitle(value);



  }

  const handleDescChange = (event) => {
    const value = event.target.value;
    setDescription(value);
  }

  const handleSelectedCategory = (event) => {

    setSelectedCategory(event);
  };

  const handleCategoryChange = (id) => {
    setSelectedCategory(id);
    document.getElementById("globalWidget").click()
  };
  const deleteCategory = (id,widgetId) => {
    // setSelectedCategory(id);
    setCatagoryList((prevState) => {
     
      let copyCatagory = [
        ...prevState
      ]
      let selectedCategory=copyCatagory.find((x) => x.id == id).Widget.filter((x) => x.id !== widgetId);
      setTitle("")
      setDescription("")
      copyCatagory.find((x) => x.id == id).Widget=selectedCategory;
      setCatagoryList(copyCatagory)
      return copyCatagory
    })
  };
  const handleSubmit = () => {
    if (title && description) {
      setCatagoryList((prevState) => {
        const number = Math.floor(Math.random() * 99) + 1;
        let Obj1 = {
          "id": number,
          "WidgetName": title,
          "WidgetContent": description

        }

        let copyCatagory = [
          ...prevState
        ]
        copyCatagory.find((x) => x.id == selectedCategory).Widget.push(Obj1)
        setTitle("")
        setDescription("")
        setSelectedCategory(catagoriesData[0].id)
        document.getElementById("discard").click()
        return copyCatagory
      })
    }
    console.log(catagoryList);
  }
  return (
    <>
      <div className="container">
        <div className='top-bar mt-4'>
          <div>
            <h5>CNAPP Dashboard</h5>
          </div>
          <div>
            <button type="button" id= "globalWidget" className="btn btn-primary custom-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <i class="fa-solid fa-plus">&nbsp;</i>Add Widget
            </button>
          </div>
        </div>


        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Enter Widget Details</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <ul className="nav nav-tabs">
                  {catagoriesData.map((category, i) => (
                    <li className="nav-item" onClick={() => handleSelectedCategory(category.id)} key={category.id}>
                      <a className={`nav-link ${i == findElementIndex(category) ? "active" : " "}`} aria-current="page" >{category.CatName}</a>
                    </li>
                  ))}
                </ul>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                  <input type="text" className="form-control" id="exampleFormControlInput1" onChange={handleTitleChange} placeholder="Enter Title Name" value={title} />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                  <textarea className="form-control" onChange={handleDescChange} id="exampleFormControlTextarea1" rows="3" value={description}></textarea>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary custom-btn" id="discard" data-bs-dismiss="modal">Discard</button>
                <button type="button" className="btn btn-primary custom-btn" onClick={handleSubmit} > Submit</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          {catagoryList.map((category, i) => (

            <div key={category.id} className='mt-4'>
              <h6 className='mb-2'><b>{category.CatName}</b></h6>
              <Catagories onWidgetDelete= {(id,widgetId) =>{deleteCategory(id,widgetId)}} widgets={category.Widget} onWidgetAdd = {(id) =>{handleCategoryChange(id)}} categoryId= {category.id}  ></Catagories>
            </div>
          ))}

        </div>
      </div>

    </>

  );
}

export default App;
