import { images } from "@/assets/images";
import { Routes } from "@/enums";
import { useStyles } from "@/hooks/use-styles";
import { Link } from "expo-router";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { generateHeroStyles } from "./hero.styles";

export const Hero = () => {
  const styles = useStyles(generateHeroStyles);
  return (
    <ImageBackground
      source={images.heroBackground}
      style={styles.imageBackground}
    >
      <View style={styles.overlay} />
      <View>
        <Text style={styles.heading}>
          You got the travel plans, we got the travel vans.
        </Text>
        <Text style={styles.content}>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </Text>
        <Link href={Routes.Vans} asChild style={styles.link}>
          <TouchableOpacity>
            <Text style={styles.button}>Find your van</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ImageBackground>
  );
};
