import { SafeAreaView } from "react-native";
import { Header } from "../../components/Header/Header";
import { UserStoriesNavbar } from "../../components/UserStoriesNavbar/UserStoriesNavbar";
import { UserPostsBody } from "../../components/UserPostsBody/UserPostsBody";
import { globalStyle } from "../../assets/styles/globalStyle";

function Home(): React.JSX.Element {
  return (
      <SafeAreaView style={globalStyle.whiteBG}>
        <Header />
        <UserStoriesNavbar />
        <UserPostsBody />
      </SafeAreaView>
  );
}

export default Home;