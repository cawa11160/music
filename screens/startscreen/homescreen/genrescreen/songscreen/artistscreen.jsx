import { StyleSheet, Text, View } from 'react-native';
import {Tabs, Redirect} from 'expo-router';
import React from 'react'

const artistscreen = () => {
  return (
    <>
        <Tabs>
            <Tabs.screen
            name='home'
            />
        </Tabs>
    </>
  )
}

export default artistscreen

const styles = StyleSheet.create({})