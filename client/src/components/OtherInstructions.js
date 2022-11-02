import React from "react";
import { ExamDetails } from ".ExamDetails";

function OtherInstructions() {
  return (
    <div className="box">
      Other Important Instructions ఇతర ముఖ్యమైన సూచనలు
      <ExamDetails />
      1. Details of the Question Paper. ప్రశ్న పత్రంలోని వివరాలు 2. You will be
      given 180 minutes to attempt 160 questions. 160 ప్రశ్నలకు జవాబు ఇవ్వడానికి
      మీకు 180 నిమిషాల సమయం ఇవ్వబడుతుంది. 3. The Question Paper consists of
      objective type questions only. ప్రశ్న పత్రంలో కేవలం ఆబ్జెక్టివ్ తరహా
      ప్రశ్నలు మాత్రమే ఉంటాయి. 4. There will be no negative marks for wrong
      answers. తప్పు గా ఇచ్చిన జవాబులకి నెగెటివ్ మార్కులు ఉండవు. 5. Questions
      will be available in two languages – English and Telugu. ప్రశ్నలు ఇంగ్లిష్
      మరియు తెలుగు భాషలలో అందుబాటులో ఉంటాయి. 6. The questions will be displayed
      on the screen one at a time in both the languages. కంప్యుటర్ తెర మీద ఒక్కో
      ప్రశ్న ఒకే సారి రెండు భాషల్లో ప్రదర్శించబడుతుంది. 7. Each question will
      have 4 options, out of which one will be the correct answer and the
      candidate has to select one option. ఒక్కో ప్రశ్నకు 4 ప్రత్యామ్నాయాలు
      (options) ఉంటాయి, అందులో సరియైన జవాబుని అభ్యర్థి గుర్తించవలెను. 8. If
      there is any ambiguity in Telugu version of the question and options, the
      English version will be considered as final. ప్రశ్న మరియు ఎంపికల యొక్క
      తెలుగు వెర్షన్‌లో ఏదైనా అస్పష్టత ఉంటే, ఇంగ్లీష్ వెర్షన్ ఫైనల్‌గా
      పరిగణించబడుతుంది.
    </div>
  );
}
export { OtherInstructions };
