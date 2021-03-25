import React from "react";
import Content from "../Content";
import FormHeader from "../FormHeader";

export default function Home(props) {
  const {
    isEdit,
    changeContent,
    changeLevel,
    handleConfirm,
    handleEdit,
    noteData,
    noteList,
    handleRemove,
    isOpenForm,
    changeQueryContent,
    changeQueryLevel,
    changeQueryDate
  } = props;
  return (
    <>
      <FormHeader
        changeQueryDate={changeQueryDate}
        changeQueryLevel={changeQueryLevel}
        changeQueryContent={changeQueryContent}
        isOpenForm={isOpenForm}
        toggleOpenform={props.toggleOpenform}
      />
      <Content
        isOpenForm={isOpenForm}
        isEdit={isEdit}
        changeLevel={changeLevel}
        changeContent={changeContent}
        handleConfirm={handleConfirm}
        handleEdit={handleEdit}
        handleRemove={handleRemove}
        noteData={noteData}
        noteList={noteList}
      />
    </>
  );
}
