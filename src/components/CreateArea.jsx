import React, { useState } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    event.preventDefault();
    setNote({
      title: "",
      content: ""
    });
  }

  return (
    <div>
      <form className="create-note" onSubmit={submitNote}>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          style={{ color: "gray" }}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button
          type="submit"
          onClick={() => {
            props.onAdd(note);
            // setNote("");
          }}
        >
          <AddCircleIcon />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
