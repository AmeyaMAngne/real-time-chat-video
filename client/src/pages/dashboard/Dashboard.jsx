import Chat from "../../components/Chat";
import Sidebar from "../../components/Sidebar";
import { connectWithSocketServer } from "../../communication/socket";
import { useSelector, useDispatch } from "react-redux";

const Dashboard = () => {
  const { chosenChatDetails } = useSelector((state) => state.chat);
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  if (token !== null && user !== null) {
    connectWithSocketServer(token, dispatch, chosenChatDetails, user);
  }

  return (
    <div className="flex">
      <Sidebar />
      <Chat />
    </div>
  );
};

export default Dashboard;
