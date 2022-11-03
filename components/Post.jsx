import {
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity,
  Pressable,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { Image } from "react-native-elements";
import Avatar from "./Avatar";
const Post = ({
  Postdata,
  showFullPost,
  navigation,
  goToUserProfile,
  profilePage,
}) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#1d1d1d",
      shadowOffset: {
        height: 2,
        width: 5,
      },
      paddingVertical: 15,
      paddingHorizontal: "4%",
      display: "flex",
      flexDirection: "column",
      borderBottomColor: "#F5F8FA",
      borderTopColor: "#F5F8FA",
      borderColor: "-#F5F8FA",
      borderRadius: 25,
      marginHorizontal: profilePage ? 10 : 10,
      marginVertical: profilePage ? 5 : 10,
    },
    header: {
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      color: "purple",
    },
    name: {
      fontSize: 16,
      fontWeight: "500",
      color: "white",
      marginHorizontal: 4,
    },
    text: {
      fontSize: 16,
      color: "lightgreen",
    },
    statscontainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderRadius: 8,
      marginVertical: 4,
    },
    stats: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    image: {
      width: "100%",
      height: "100%",
      borderRadius: 10,
      resizeMode: "contain",
    },
  });

  function getFormattedPostContent(POST_TEXT) {
    let postwithurls = extractURLs(POST_TEXT);
    // let Post_Text_With_HasTags = HASHTAG_FORMATTER(String(dara.join("")));
    return postwithurls;
  }
  const HASHTAG_FORMATTER = (string) => {
    // console.log(string);
    return string
      .split(/((?:^|\s)(?:#[a-z\d-]+))/gi)
      .filter(Boolean)
      .map((v, index) => {
        if (v.includes("#")) {
          return (
            <Text key={index} style={{ color: "yellow", fontWeight: "500" }}>
              {v}
            </Text>
          );
        } else {
          return <Text key={index}>{v}</Text>;
        }
      });
  };

  function extractURLs(txt) {
    const URL_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

    const renderText = (txt) =>
      txt?.split(" ").map((part, index) =>
        URL_REGEX.test(part) ? (
          <Text key={index} style={{ color: "lightblue" }}>
            {part}{" "}
          </Text>
        ) : (
          part + " "
        )
      );
    return renderText(txt);
  }

  function getLink(url) {
    const gateway = "https://ipfs.io/ipfs/";
    if (!url) return url;

    const frurl = url
      .replace(/^Qm[1-9A-Za-z]{44}/gm, `${gateway}${url}`)
      .replace("https://ipfs.io/ipfs/", gateway)
      .replace("https://ipfs.infura.io/ipfs/", gateway)
      .replace("ipfs://", gateway);
    return frurl;
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          onTouchEndCapture={() => {
            console.log("hi");
            goToUserProfile(Postdata?.id, Postdata?.profile);
          }}
        >
          <Avatar
            src={
              Postdata?.profile?.picture?.original?.url ||
              Postdata?.profile?.picture?.uri
            }
            mx={4}
            p={2}
            size={40}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            onTouchEndCapture={() => {
              console.log("hi");
              goToUserProfile(Postdata?.id, Postdata?.profile);
            }}
            style={{
              flexDirection: "column",
              marginHorizontal: 2,
            }}
          >
            <Text style={{ color: "white", fontSize: 17, fontWeight: "600" }}>
              {Postdata?.profile?.name}
            </Text>
            <Text style={{ color: "gray", fontSize: 16 }}>
              @{Postdata?.profile?.handle}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <View
          onTouchEndCapture={() =>
            showFullPost(Postdata?.id, Postdata?.profile?.name, Postdata)
          }
        >
          <Text
            style={{
              color: "white",
              fontSize: 15,
              marginVertical: 10,
            }}
          >
            {/* {Postdata?.metadata?.content} */}
            {/* {extractURLs(Postdata?.metadata?.content)} */}
            {/* {HASHTAG_FORMATTER(Postdata?.metadata?.content)} */}
            {getFormattedPostContent(Postdata?.metadata?.content)}
          </Text>
          {Postdata?.metadata?.media[0]?.original?.url.length > 0 ? (
            <View
              style={{
                backgroundColor: "#1d1d1d",
                height: 220,
                borderRadius: 10,
              }}
            >
              <Image
                source={{
                  uri: getLink(Postdata?.metadata?.media[0]?.original?.url),
                }}
                style={styles.image}
              />
            </View>
          ) : (
            <></>
          )}
        </View>
      </TouchableOpacity>
      <View style={styles.statscontainer}>
        <View style={styles.stats}>
          <AntDesign name="hearto" size={18} color={"lightgrey"} />
          <Text style={{ color: "white", marginHorizontal: 6 }}>
            {Postdata?.stats?.totalUpvotes}
          </Text>
        </View>
        <View style={styles.stats}>
          <EvilIcons name="comment" size={18} color={"lightgrey"} />
          <Text style={{ color: "white", marginHorizontal: 6 }}>
            {Postdata?.stats?.totalAmountOfComments}
          </Text>
        </View>
        <View style={styles.stats}>
          <EvilIcons name="comment" size={18} color={"lightgrey"} />
          <Text style={{ color: "white", marginHorizontal: 6 }}>
            {Postdata?.stats?.totalAmountOfCollects}
          </Text>
        </View>
        <View style={styles.stats}>
          <AntDesign name="swap" size={18} color={"lightgrey"} />
          <Text style={{ color: "white", marginHorizontal: 6 }}>
            {Postdata?.stats?.totalAmountOfMirrors}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Post;
