import { images } from "@/assets/images";
import { Routes } from "@/enums";
import { useStyles } from "@/hooks/use-styles";
import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { generateMissionStyles } from "./mission.styles";

const missionImage = images.mission;

export const Mission = () => {
  const styles = useStyles(generateMissionStyles);
  return (
    <>
      <View style={styles.missionContainer}>
        <Text style={styles.missionTitle}>
          Don’t squeeze in a sedan when you could relax in a van.
        </Text>
        <Text style={styles.missionText}>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </Text>
        <Text style={styles.missionText}>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </Text>
        <View style={styles.tagLineContainer}>
          <Text style={styles.tagLineText}>Your destination is waiting.</Text>
          <Text style={styles.tagLineText}>Your van is ready.</Text>
          <Link href={Routes.Vans} style={styles.tagLineLinkContainer} asChild>
            <TouchableOpacity>
              <Text style={styles.tagLineLink}>Explore our vans</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
      <Image source={missionImage} style={styles.image} resizeMode="cover" />
    </>
  );
};
