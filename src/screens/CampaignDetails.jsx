import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useNavigation, useTheme } from '@react-navigation/native'
import { DetailRow, ScreenLayout } from '../components';
import { useThemeStyleSheet } from '../hooks';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CampaignDetails = () => {

  const theme = useTheme();
  const styles = useThemeStyleSheet(createStyles);
  const navigation = useNavigation();

  return (
    <ScreenLayout>
      <Text style={styles.heading}>Ad Performance</Text>

      <View style={styles.progressContainer}>
        <AnimatedCircularProgress
          size={230}
          width={10}
          fill={25}
          rotation={0}
          tintColor={theme.colors.secondary}
          lineCap="round"
          backgroundColor="#4706a8">
          {
            (fill) => (
              <View style={styles.progressContent}>
                <View style={styles.iconContainer}>
                  <Icon name="currency-usd" size={30} color="white" />
                </View>
                <View style={styles.amountStatsContainer}>
                  <Text style={[styles.statsText, styles.spend]}>Spend</Text>
                  <Text style={[styles.statsText, styles.remain]}>$252.54</Text>
                  <Text style={[styles.statsText, styles.total]}>out of $1000</Text>
                </View>
              </View>
            )
          }
        </AnimatedCircularProgress>
      </View>

      <View style={styles.detailColumnContainer}>
        <View style={styles.mediaContainer} >
          <Text style={styles.heading}>Media</Text>
          <Image
            source={{ uri: "https://images.unsplash.com/photo-1512223886638-d2914abf5df3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" }}
            style={styles.media}
          />
        </View>

        <View style={styles.audienceContainer}>
          <Text style={styles.heading}>Audience</Text>
          <View style={styles.audienceDetailsContainer}>
            <DetailRow label={"Gender"} value="All" icon="gender-male-female" />
            <DetailRow label={"Age Range"} value="18 - 50" icon="human-male-girl" />
            <DetailRow label={"Language"} value="Arabic, English" icon="translate" />
            <DetailRow label={"Location"} value="Kuwait" icon="map-marker" />
          </View>
        </View>
      </View>

      <View style={styles.destinationContainer}>
        <Text style={styles.heading}>Ad Destination</Text>
        <View style={styles.destinationValueContainer}>
          <Text style={styles.destinationText}>https://www.google.com</Text>
          <Icon style={styles.destinationIcon} name="content-copy" size={30} color={theme.colors.white} />
        </View>
      </View>

    </ScreenLayout>
  )
}

export default CampaignDetails

const createStyles = (theme) => StyleSheet.create({

  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 10,
    marginTop: 20,
    color: theme.colors.white,
    marginLeft: 12
  },

  progressContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20
  },

  progressContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },

  iconContainer: {
    borderWidth: 2,
    borderColor: theme.colors.white,
    borderRadius: 50,
    padding: 5,
    marginRight: 10,
    borderStyle: 'dashed'
  },

  amountStatsContainer: {
    alignItems: 'center',
  },

  statsText: {
    fontSize: 18,
    color: theme.colors.white,
    marginBottom: 1,
    marginTop: 1
  },
  spend: {
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  remain: {
    color: theme.colors.secondary
  },
  total: {
    color: theme.colors.white
  },

  detailColumnContainer: {
    flexDirection: 'row',
  },

  mediaContainer: {
    flex: 0.5,
    marginRight: 10
  },
  media: {
    width: '100%',
    minHeight: 300,
    borderRadius: 40
  },
  audienceContainer: {
    flex: 0.5,
    marginLeft: 10
  },
  audienceDetailsContainer: {
    backgroundColor: '#350380',
    borderRadius: 40,
    width: '100%',
    minHeight: 300,
    padding: 20
  },

  destinationContainer: {
    marginVertical: 20
  },
  destinationValueContainer: {
    backgroundColor: '#4505a1',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  destinationText: {
    fontSize: 16,
    color: theme.colors.white
  },
  destinationIcon: {

  }

})