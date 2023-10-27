import { GridColDef } from "@mui/x-data-grid";
import "./Add.scss";

type Props = {
  slug: String;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Add = (props: Props) => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>
          X
        </span>
        <h1>Add New {props.slug}</h1>

        <form onSubmit={handleSubmit}>
          {props.columns
            .filter((item) => item.field != "id" && item.field != "img")
            .map((column) => (
              <div className="item">
                <label>{column.headerName}</label>
                <input type={column.type} placeholder={column.field} />
              </div>
            ))}
          <button>Save</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
