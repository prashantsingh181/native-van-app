import { useStyles } from "@/hooks/useStyles";
import { Text, View } from "react-native";
import { generateFooterStyles } from "./footer.styles";

export const Footer = () => {
  const year = new Date().getFullYear();
  const styles = useStyles(generateFooterStyles);

  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>&copy; {year} #VANLIFE</Text>
    </View>
  );
};
