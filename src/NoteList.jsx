const noteList = ({ noteList }) => {
    return (
        <div>
            {noteList.map((note) => {
                return (
                    <>
                    <div className="note" key={note.id}>
                        <h2>{note.title}</h2>
                        <p>{note.content}</p>
                    </div>
                    {/* <button>Delete</button> */}
                    </>
                );
            })}
        </div>
    );
}

export default noteList;