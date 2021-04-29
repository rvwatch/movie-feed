import { connect } from "react-redux"
import Row from "./Row"

const mapStateToProps = (state: any) => {
    return {
        shows: state
    }
}

const RowContainer = connect(mapStateToProps)(Row);

export default RowContainer;