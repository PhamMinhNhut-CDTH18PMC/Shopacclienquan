import React, { Component } from "react";
import { Box } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import moment from "moment";
import axios from "axios";
const DEFAULT_NOTE_DATA = {
  id: 0,
  content: "",
  level: "low",
  createAt: null,
  status: "doing",
};

class App extends Component {
  state = {
    noteList: [],
    noteData: DEFAULT_NOTE_DATA,
    isOpenForm: false,
    query: {
      content: "",
      level: "all",
      date: null,
      status: "",
    },
  };

  changeContent = (e) => {
    this.setState({
      noteData: {
        ...this.state.noteData,
        content: e.target.value,
      },
    });
  };

  changeLevel = (e) => {
    this.setState({
      noteData: {
        ...this.state.noteData,
        level: e.target.value,
      },
    });
  };

  handleConfirm = () => {
    const { noteList, noteData } = this.state;
    if (noteData.id === DEFAULT_NOTE_DATA.id) {
      // Tạo id mới
      // const id = Math.round(Math.random() * 1000);
      // Thêm trường id và ngày tạo
      const _noteData = { ...noteData, createAt: new Date().getTime() };
      axios
        .post("https://604fababc20143001744d9e9.mockapi.io/notes", _noteData)
        .then((reponse) => {
          const newList = [...noteList, reponse.data];
          this.setState({
            noteList: newList,
            noteData: DEFAULT_NOTE_DATA,
          });
        });
    } else {
      // good

      axios
        .put(
          `https://604fababc20143001744d9e9.mockapi.io/notes/${noteData.id}`,
          noteData
        )
        .then((reponse) => {
          const newList = noteList.map((note) =>
            note.id === reponse.data.id ? reponse.data : note
          );
          // bad
          // let index = noteList.findIndex((note) => note.id === noteData.id);
          // noteList[index] = noteData;
          this.setState(
            {
              noteList: newList,
              noteData: DEFAULT_NOTE_DATA,
            },
            () => {
              // this.saveToLocalStorage();
            }
          );
        });
    }
  };

  saveToLocalStorage = () => {
    localStorage.setItem("noteList", JSON.stringify(this.state.noteList));
  };

  handleEdit = (note) => {
    this.setState({
      noteData: note,
    });
  };

  handleRemove = (noteValue) => {
    const { noteList } = this.state;
    const newList = noteList.filter((note) => note.id !== noteValue.id);
    this.setState(
      {
        noteList: newList,
      },
      () => {
        // this.saveToLocalStorage();
      }
    );

    axios
      .delete(
        `https://604fababc20143001744d9e9.mockapi.io/notes/${noteValue.id}`
      )
      .then((reponse) => {
        const newList = noteList.filter((note) => note.id !== noteValue.id);
        this.setState(
          {
            noteList: newList,
          },
          () => {
            // this.saveToLocalStorage();
          }
        );
      });
  };

  toggleOpenform = () => {
    this.setState({
      isOpenForm: !this.state.isOpenForm,
    });
  };

  changeQueryContent = (e) => {
    this.setState({
      query: {
        ...this.state.query,
        content: e.target.value,
      },
    });
  };

  changeQueryLevel = (e) => {
    this.setState({
      query: {
        ...this.state.query,
        level: e.target.value,
      },
    });
  };

  changeQueryDate = (e) => {
    this.setState({
      query: {
        ...this.state.query,
        date: new Date(e.target.value).getTime(),
      },
    });
  };
  componentDidMount() {
    axios
      .get("https://604fababc20143001744d9e9.mockapi.io/notes")
      .then((reponse) => {
        console.log("data", reponse.data);
        //handle
        this.setState({
          noteList: reponse.data,
        });
      });
  }

  render() {
    const { noteList, noteData, isOpenForm, query } = this.state;
    const isEdit = noteData.id !== DEFAULT_NOTE_DATA.id;
    const filteredNote = noteList
      .filter((note) =>
        note.content.toLowerCase().includes(query.content.toLowerCase())
      )
      .filter((note) => {
        if (query.level === "all") {
          return true;
        } else {
          return query.level === note.level;
        }
      })
      .filter((note) => {
        if (query.date === null) {
          return true;
        } else {
          return (
            moment(query.date).format("DDMMYYYY") ===
            moment(note.createAt).format("DDMMYYYY")
          );
        }
      });
    return (
      <Router>
        <Box padding="0 5em">
          <Header />
        </Box>
        <Box padding="0 5em">
          <Switch>
            <Route exact path="/">
              <Home
                changeQueryDate={this.changeQueryDate}
                changeQueryLevel={this.changeQueryLevel}
                changeQueryContent={this.changeQueryContent}
                toggleOpenform={this.toggleOpenform}
                isOpenForm={isOpenForm}
                isEdit={isEdit}
                changeLevel={this.changeLevel}
                changeContent={this.changeContent}
                handleConfirm={this.handleConfirm}
                handleEdit={this.handleEdit}
                handleRemove={this.handleRemove}
                noteData={noteData}
                noteList={filteredNote}
              />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
        </Box>
      </Router>
    );
  }
}

export default App;
