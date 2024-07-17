import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link, router } from 'expo-router'

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = () => {
    const { username, email, password } = form
    let isValid = true
    let newErrors = {
      username: '',
      email: '',
      password: ''
    }

    if (!username) {
      newErrors.username = 'Username is required'
      isValid = false
    }

    if (!email) {
      newErrors.email = 'Email is required'
      isValid = false
    }

    if (!password) {
      newErrors.password = 'Password is required'
      isValid = false
    }

    setErrors(newErrors)

    if (isValid) {
      setIsSubmitting(true)
      
      // Add API call to Register new user

      setTimeout(() => {
        setIsSubmitting(false)
        router.replace('/chats')
      }, 1000)
    }
  }

  return (
    <SafeAreaView className="bg-primary h-full">

      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-2">
          <Image 
            source={images.logo}
            resizeMode='contain'
            className="w-[100px] h-[100px]"
          />

          <Text className="text-2xl text-white text-semibold mt-2 font-psemibold mb-8">
            Sign Up to UnityBridge
          </Text>

          <FormField
            title="Username"
            value={form.username}
            placeholder="Enter your Username"
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles=""
          />
          {errors.username ? <Text className="text-green-500 mt-0 mb-6">{errors.username}</Text> : null}

          <FormField
            title="Email"
            value={form.email}
            placeholder="Enter your email"
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles=""
            keyboardType="email-address"
          />
          {errors.email ? <Text className="text-green-500 mt-0 mb-6">{errors.email}</Text> : null}

          <FormField
            title="Password"
            value={form.password}
            placeholder="Enter your password"
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles=""
          />
          {errors.password ? <Text className="text-green-500 mt-0 mb-6">{errors.password}</Text> : null}

          <CustomButton
            title="Register"
            handlePress={submit}
            containerStyles="w-full"
            textStyles="text-black font-psemibold"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-white font-pregular">
              Already have an account? 
            </Text>
            <Link href='/sign-in' className="text-lg text-secondary font-psemibold">Sign In</Link>
          </View>

        </View>
        
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp
