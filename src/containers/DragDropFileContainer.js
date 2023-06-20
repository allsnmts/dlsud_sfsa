import { connect } from "react-redux";
import { convertCSVFile } from "../redux/admin/adminActions";
import DragDropFile from "@/components/DragDropFile";

export default connect(null, { convertCSVFile })(DragDropFile);
