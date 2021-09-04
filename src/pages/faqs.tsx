import React from "react"
import GettingStarted from "containers/GettingStarted"
import FAQs from "containers/FAQs"
import JoinDiscord from "containers/JoinDiscord"
import DownloadSection from "containers/DownloadSection"


const faqArray = {
  "About Volta": [
    {
      question: `What is Volta?`,
      answer: `Volta is a self-serve XR creation platform that gives artists & creators the ability to design and broadcast experiential content that goes beyond the 2D screen and reaches into the metaverse. Volta integrates seamlessly into artist’s existing workflows, allows them to build new immersive worlds that were previously unimaginable, and can even let their fans have an impact on the environment, turning a broadcast into a living breathing place. What once required a state of the art production studio and a six figure budget is now free.`
    },
    {
      question: `What is Volta Create?`,
      answer: `Volta Create is our XR world editing, creation and broadcasting software. We have been building Volta Live, which is our VR application that is on the Oculus Quest store.

      One of the next major features we will roll out is the ability to stream full 360, 6 degree of freedom experiential performances to Volta Live.`
    },
    {
      question: `Who is Volta for?`,
      answer: `Volta is for any artist, musician, DJ or any other kind of creator who wants to create mixed reality experiences.`
    },
    {
      question: `Is it really free?`,
      answer: `Yup, totally free!`
    },
    {
      question: `Can I put music right into Volta?`,
      answer: `You sure can, you can even use your microphone and have the world react to your voice. Go to the settings > Audio and you can choose what audio source you want to bring in.

      You will probably need to use audio routing software to run audio in from another source. Unfortunately, neither Mac or Windows computers have a way to do it natively. So, you need to download 3rd party software. On Mac we recommend <a href="https://existential.audio/blackhole/" target="_blank">Blackhole 2 channel</a>. On Windows we recommend <a href="https://vb-audio.com/Voicemeeter/" target="_blank">Voicemeeter</a>.`
    }
  ],
  "Technical Information": [
    {
      question: `What is RCAM, LIDAR or Volumetric Effects?`,
      answer: `Volumetric effects in Volta is what makes some of the elements really come to life, they are particle effects that come off some of the special elements in Volta. You can use the Chromakey Billboard or RCam to enable these effects.

      RCam is a library made by Unity developer Keijiro Takahashi that sends LiDAR data (think radar but with lasers) from the new iPhones and iPads that have LiDAR sensors to Volta Create.
      `
    },
    {
      question: `Where can I learn how to use it?`,
      answer: `Click <a href="/tutorials" target="_blank">here</a> for a series of tutorials. You can learn to build captivating mixed reality worlds in 15-20 minutes.

      The whole team is also really active on Discord, you can join our server <a href="https://discord.gg/R9aYJ6rNtJ" target="_blank">here</a> and ask us questions directly!
      `
    },
    {
      question: `Can I connect my existing music software to Volta?`,
      answer: `Yes! Check out our <a href="/tutorials">tutorials</a> on how to connect to <a href="https://www.ableton.com/en/" target="_blank">Ableton</a> and <a href="https://www.native-instruments.com/en/catalog/traktor/" target="_blank">Traktor</a> or this <a href="/tutorials/rig/midi-daw-cdj" target="_blank">tutorial</a> on how to connect to anything that puts out MIDI or Audio, including MIDI controllers, CDJs, and other DAWs.`
    },
    {
      question: `Do I need OBS?`,
      answer: `Nope! We’ve essentially rebuilt OBS into Volta, so you can stream to any platform that takes an RTMP streamkey from within Volta. Just go to the perform tab, click on the cog icon next to the “Start Stream” button and enter your RTMP URL and stream key.`
    },
    {
      question: `How do I stream to 2d streaming platforms (Twitch,  YT, mixcloud)?`,
      answer: `Please see the answer to the above question ("Do I need OBS?") for instructions on how.`
    },
    {
      question: `How can I get help with my set up?`,
      answer: `You can use anything that puts out audio or MIDI to control Volta. We have made tutorials to show you how get set up with your workflow. Here are links to the tutorials: <a href="/tutorials/rig/ableton" target="_blank">Ableton</a>, <a href="/tutorials/rig/traktor" target="_blank">Traktor</a> and <a href="/tutorials/rig/midi-daw-cdj" target="_blank">MIDI controllers/DAWs/CDJs</a>`
    },
    {
      question: `Can I stream to VR?`,
      answer: `Not just yet but that is one of the next big features on our roadmap. We actually have a list of all of our upcoming product features <a href="/downloads#roadmap" target="_blank">here</a>. Check it out and please give us feedback on what you would want to see in Volta.`
    },
    {
      question: `Can I use audio from spotify or another streaming service in Volta?`,
      answer: `You sure can, you can even use your microphone and have the world react to your voice. Go to the settings > Audio and you can choose what audio source you want to bring in.

      You will probably need to use audio routing software to run audio in from another source. Unfortunately, neither Mac or Windows computers have a way to do it natively. So, you need to download 3rd party software. On Mac we recommend <a href="https://existential.audio/blackhole/" target="_blank">Blackhole 2 channel</a>. On Windows we recommend <a href="https://vb-audio.com/Voicemeeter/" target="_blank">Voicemeeter</a>.`
    },
    {
      question: `Can I upload 3D files to Volta?`,
      answer: `Not just yet but that is one of the next big features on our roadmap. We actually have a list of all of our upcoming product features <a href="/downloads#roadmap" target="_blank">here</a>. Check it out and please give us feedback on what you would want to see in Volta.`
    },
    {
      question: `Can I use my microphone to do anything with Volta?`,
      answer: `You sure can! Go to Settings > Audio and choose your computer’s microphone. If you go to any element behavior, click the link icon, choose in-built, you can use the amplitude from your microphone parsed into 5 different frequency bands.`
    },
    {
      question: `How do I save my performance?`,
      answer: `Just click save in the navigation pane. If you are using the generic MIDI max device don’t forget to save the parameter list and load it up every time you plan to use that controller, DAW, CDJ.`
    },
    {
      question: `Where can I see if I’ve got the latest version of Volta?`,
      answer: `Our downloads page has the latest version number and a link to it.`
    },
    {
      question: `What else do I need other than the software?`,
      answer: `The desire to make some next level shit. (In all seriousness that’s about it unless you want to do some cool volumetric stuff, in which case one of the iPhones or iPads with a LiDAR sensor).`
    }
  ],
  "Trouble shooting": [
    {
      question: `Why won’t Volta open on my Mac?`,
      answer: `We are working on getting Volta onto the Mac app store, until then you will probably find that when you try to open Volta for the first time it says that Apple can’t verify us as developers.

      Just ctrl click on the Volta app, click open one more time and you should see the same message but this time with the option to open it. You will only have to do this once.`
    },
    {
      question: `What’s the minimum specs to open Mac on my laptop?`,
      answer: `Volta will run on Mac OS 10.13 or above.`
    },
    {
      question: `Why don’t I hear anything on my stream?`,
      answer: `Audio doesn’t automatically route between programs in computers and neither Mac or Windows computers have a way to do it natively. So, you need to download 3rd party software. On Mac we recommend <a href="https://existential.audio/blackhole/" target="_blank">Blackhole 2 channel</a>. On Windows we recommend <a href="https://vb-audio.com/Voicemeeter/" target="_blank">Voicemeeter</a>.`
    },
    {
      question: `I’m really lost, how can I get more help?`,
      answer: `Join us on <a href="https://discord.gg/R9aYJ6rNtJ" target="_blank">Discord</a>, everyone on the team is really active there. We would love to connect with you and general, hear your feedback and learn more about how you want to create with Volta!`
    },
    {
      question: `I’ve found a bug! How do I let someone know about it?`,
      answer: `Please let us know! You can email us at <a href="mailto:help@volta-xr.com" target="_blank">help@volta-xr.com</a> or click <a href="https://discord.gg/R9aYJ6rNtJ" target="_blank">here</a> to go to our Discord server and share it with us there.`
    }
  ],
  "Miscellaneous": [
    {
      question: `Can I use Volta to shoot a music video?`,
      answer: `Absolutely! Imogen Heap did just that. Check out her video <a href="https://www.youtube.com/watch?v=OenBCfdRtws" target="blank">here!</a>`
    },
    {
      question: `Do you handle music licensing when I’m streaming?`,
      answer: `We do not.`
    },
    {
      question: `I have some suggestions for Volta, how do I share?`,
      answer: `Please join us on <a href="https://discord.gg/R9aYJ6rNtJ" target="_blank">Discord</a>, everyone on the team is really active there. We would love to connect with you and general, hear your feedback and learn more about how you want to create with Volta!`
    }
  ]
}

export default () => (
  <div id="faqs">
    <FAQs faqArray={faqArray} />
    <GettingStarted />
    <JoinDiscord />
    <DownloadSection />
  </div>
)
