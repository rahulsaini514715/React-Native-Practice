import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import ExternalStyle from '../../style';

function UseEffectComponentDidUnmount(): JSX.Element {
  const [show, setShow] = useState(false);
  return (
    <View>
      <Text style={{ fontSize: 24, marginBottom: 50, textAlign: "center" }}> 26 useEffect as ComponentDidUnmount | Life Cycle Method </Text>
      <Button title='Toggle Component' color={"green"} onPress={() => setShow(!show)} />

      {
        show ? <User /> : null
      }
    </View>
  );
}


const User = () => {

  let timer = setInterval(() => {
    console.warn("Timer Caller")
  }, 5000)

  useEffect(() => {
    // return () => { console.warn("UseEffect called on Unmount") }
    return ()=> clearInterval(timer);
  })
  return (
    <View>
      <Text style={{ fontSize: 24, marginBottom: 50, textAlign: "center" }}>Hey,👋</Text>
    </View>
  )
}

export default UseEffectComponentDidUnmount;



// 👉 Timer ek real-life side-effect hai
// Jisko component unmount hote hi clean karna zaruri hota hai.
// Examples of side-effects:
// setInterval
// setTimeout
// API subscription
// Event listeners


// Agar cleanup nahi kiya ❌
// ➡️ Memory leak
// ➡️ Background me code chalta rahega

// Isliye timer componentWillUnmount ko demonstrate karne ke liye best example hai.


// 🔁 Toggle ke sath useEffect ka role
// Flow samjho:

// 1️⃣ show = true
// ➡️ <User /> component mount hota hai
// ➡️ Timer start hota hai

// 2️⃣ show = false (Hide / Toggle)
// ➡️ <User /> component unmount hota hai
// ➡️ useEffect ka cleanup function run hota hai
// ➡️ Timer stop (clearInterval)

// Yahi componentDidUnmount ka exact behavior hai ✅
