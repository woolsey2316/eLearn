import React from 'react'

import {
  answered,
  notAnswered,
  marked,
  answeredAndMarked,
  notVisited,
} from '../../Pages/Exam/AnswerStatusIcons'

function ExamInstructions() {
  return (
    <div className="content rounded-none p-2">
      <div className="box text-left">
        <h2 className="py-5 px-5 font-medium underline">
          General Instructions:
        </h2>
        <h2 className="m-5 px-10">
          1. Total duration of examination is 180 minutes. పరీక్ష మొత్తం వ్యవధి
          180 నిమిషాలు.
        </h2>
        <h2 className="m-5 px-10">
          2. The clock will be set at the server. The countdown timer in the top
          right corner of screen will display the remaining time available for
          you to complete the examination. When the timer reaches zero, the
          examination will end by itself. You will not be required to end or
          submit your examination. గడియారం సర్వర్ పై సెట్ చేయబడును. స్క్రీన్ కు
          పై భాగములో కుడి మూలలో (కార్నెర్ లో) కౌంట్ డౌన్ టైమర్ మీకు పరీక్ష
          పూర్తీ చేయడానికి అందుబాటులో ఉండే మిగితా సమయం సూచిస్తుంది. టైమర్ జీరో
          కు చేరుకున్నప్పుడు, పరీక్ష దానంతట అదే ముగుస్తుంది, ప్రత్యేకంగా సబ్మిట్
          చేయ వళసిన అవసరం లేదు.
        </h2>
        <h2 className="m-5 px-10">
          3. The Question Palette displayed on the right side of screen will
          show the status of each question using one of the following symbols:
          <br />
          <br />
          <div className="flex items-start ml-5">
            {notVisited()}
            <h2 className="ml-2 -mt-1">
              You have not visited the question yet.
            </h2>
          </div>
          <br />
          <div className="flex items-start ml-5">
            {notAnswered()}
            <h2 className="ml-2 -mt-1">You have not answered the question.</h2>
          </div>
          <br />
          <div className="flex items-start ml-5">
            {answered()}
            <h2 className="ml-2 -mt-1">You have answered the question.</h2>
          </div>
          <br />
          <div className="flex items-start ml-5">
            {marked()}
            <h2 className="ml-2 -mt-1">
              You have NOT answered the question, but have marked the question
              for review, this will NOT be considered for evaluation.
            </h2>
          </div>
          <br />
          <div className="flex items-start ml-5">
            {answeredAndMarked()}
            <h2 className="ml-2 -mt-1">
              You have answered the question, but marked it for review.
            </h2>
          </div>
          స్క్రీన్ కు కుడివైపు ఉన్న ప్రశ్న పాలెట్, ఈ దిగువ చిహ్నాలలో ఒకదానిని తో
          ప్రతి ప్రశ్న యొక్క స్ధితిని తెలుపుతుంది.
          <br />
          <br />
          <div className="flex items-start ml-5">
            {notVisited()}
            <h2 className="ml-2 -mt-1">మీరు ప్రశ్నను ఇంకా సందర్శించ లేదు.</h2>
          </div>
          <br />
          <div className="flex items-start ml-5">
            {notAnswered()}
            <h2 className="ml-2 -mt-1">మీరు ప్రశ్నకు జవాబు ఇంకా ఇవ్వలేదు.</h2>
          </div>
          <br />
          <div className="flex items-start ml-5">
            {answered()}
            <h2 className="ml-2 -mt-1">మీరు ప్రశ్నకు జవాబు ఇచ్చారు.</h2>
          </div>
          <br />
          <div className="flex items-start ml-5">
            {marked()}
            <h2 className="ml-2 -mt-1">
              మీరు ప్రశ్నకు జవాబు ఇవ్వలేదు, కాని ప్రశ్నకు పునరాలోచన కోసం మార్క్.
              ఈ ప్రశ్నకు మీ జవాబు మూల్యాంకనం కోసం పరిగణలోనికి తీసుకోబడదు.
            </h2>
          </div>
          <br />
          <div className="flex items-start ml-5">
            {answeredAndMarked()}
            <h2 className="ml-2 -mt-1">
              మీరు ప్రశ్నకు జవాబు ఇచ్చారు, కాని పునరాలోచన కోసం మార్క్ చేసారు.
            </h2>
          </div>
          <br />
          <br />
          The Marked for Review status for a question simply indicates that you
          would like to look at that question again. If a question is answered
          and Marked for Review, your answer for that question will be
          considered in the evaluation. <br />
          ప్రశ్నకు పునరాలోచన కోసం మార్క్ చేసిన స్ధితి, మీరు ప్రశ్నను మళ్ళి
          చూస్తారని కేవలం సూచిస్తుంది. ఒక వేళ జవాబు ఇచ్చిన తరువాత పునరాలోచన కోసం
          మార్క్ చేసినా, ఆ ప్రశ్నకు మీ జవాబు మూల్యాంకనం కోసం పరిగణలోనికి
          తీసుకోబడును.
        </h2>
        <h2 className="m-5 px-10">
          4. You can click on the ">" arrow which appears to the left of
          question palette to collapse the question palette thereby maximizing
          the question window. To view the question palette again, you can click
          on "&#60;" arrow which appears on the right side of question window.
          ప్రశ్న విండో పరిమాణం పెంచటానికి (Maximize), మీరు &#8220; &#60; &#8221;
          యారో పై క్లిక్ చేయండి, ప్రశ్న విండో పరిమాణం తగ్గించటానికి, &#8220;
          &#62; &#8221; యారో పై క్లిక్ చేయండి. <br />
          <br />
          5. You can click on Scroll Down to navigate to the bottom and Scroll
          Up to navigate to the top of the question area, without scrolling.
          మీరు పై నుండి కిందకు వెళ్ళడానికి Scroll Down యారో పై క్లిక్ చేయండి,
          కింద నుండి పైకి వెళ్ళడానికి Scroll Up యారో పై క్లిక్ చేయండి. <br />
          <br />
          <h2 className="font-medium">
            Navigating From One Question to Another Question: ఒక ప్రశ్న నుండి
            మరొక ప్రశ్నకు వెళ్ళడం (నావిగేషన్): <br />
            <br />
          </h2>
          6. To answer a question, do the following: Click on the question
          number in the Question Palette at the right of your screen to go to
          that numbered question directly. Note that using this option does NOT
          save your answer to the current question. Click on Save & Next to save
          your answer for the current question and then go to the next question.
          Click on Mark for Review & Next to save your answer for the current
          question, mark it for review, and then go to the next question.
        </h2>
        <h2 className="m-5 px-10">
          ప్రశ్నకు జవాబు ఇవ్వడానికి, ఈ క్రింది సూచనలను పాటించండి. ప్రత్యెక
          ప్రశ్నకు నేరుగా వెళ్ళడానికి స్క్రీన్ కు కుడివైపు ఉన్న ప్రశ్న పాలెట్ లో
          ప్రశ్న సంఖ్య పై క్లిక్ చేయండి. గమనిక: ఈ ఎంపిక ద్వారా ప్రస్తుత ప్రశ్న
          యొక్క జవాబు సేవ్ కాదు. ప్రస్తుత ప్రశ్న యొక్క జవాబును సేవ్ చేయడానికి,
          Save & Next బటన్ పై క్లిక్ చేయండి, ఆ తరువాత వేరే ప్రశ్నకు వెళ్ళండి.
          ప్రస్తుత ప్రశ్న యొక్క జవాబును సేవ్ చేసి పునరాలోచన చేయడానికి, Mark for
          Review & Next బటన్ పై క్లిక్ చేయండి, ఆ తరువాత వేరే ప్రశ్నకు వెళ్ళండి.
          <h2 className="font-medium">
            <br />
            Answering a Question : ప్రశ్నకు జవాబు ఇవ్వడం
            <br />
          </h2>
          <h2 className="font-medium">
            <br />
            7. Procedure for answering a multiple choice type question:
            <br />
          </h2>
          a) To answer a question, Click on the button against the chosen option
          among the given four options. <br />
          b) To change your chosen answer, click on the button of another
          option. <br />
          c) To deselect your chosen answer, click on the button of the chosen
          option <br />
          again or click on the Clear Response button. To save your answer, you
          MUST click on the Save & Next button. <br />
          d) To mark the question for review, click on the Mark for Review &
          Next button. <br />
          e) If an answer is selected for a question that is Marked for Review,
          that answer will be considered in the evaluation. మల్టిపుల్ ఛాయస్
          ప్రశ్నలకు జవాబు ఇవ్వడానికి పద్దతి: మీ జవాబు సెలెక్ట్ చేయడానికి,
          ఎంపికలలో ఒకదాని బటన్ పై క్లిక్ చేయండి. మీరు ఎంపిక చేసిన జవాబును
          మార్చడానికి, ఇంకొక ఎంపిక బటన్ పై క్లిక్ చేయండి. మీరు ఎంపిక చేసిన
          జవాబును తీసివేయడానికి, మళ్ళి ఎంపిక చేసిన బటన్ పై క్లిక్ చేయండి లేదా
          Clear Response బటన్ పై క్లిక్ చేయండి. మీ జవాబును సేవ్ చేయడానికి, మీరు
          Save & Next బటన్ పై క్లిక్ చేయాలి. ప్రశ్నను పునరాలోచన కోసం మార్క్
          చేయడానికి, పునరాలోచన కోసం Mark for Review & Next బటన్ పై క్లిక్
          చేయండి. పునరాలోచన కోసం మార్క్ చేసిన ప్రశ్నకు ఒక వేళ జవాబు ఎంపిక
          చేస్తే, ఆ జవాబు మూల్యాంకనం కోసం పరిగణలోనికి తీసుకోబడును.
        </h2>
        <h2 className="m-5 px-10">
          8. To change your answer to a question that has already been answered,
          first select that question for answering and then follow step 6(b)
          above. ఇప్పటికే జవాబు ఇచ్చిన ప్రశ్నకు మీ జవాబును మార్చాలనుకుంటే, మొదట
          ఆ ప్రశ్నను ఎంపిక చేసి , 6(b) లో సూచించిన పద్దతిని పాటించండి.
        </h2>
        <h2 className="m-5 px-10">
          9. Note that ONLY Questions for which answers are saved or marked for
          review after answering will be considered for evaluation. గమనిక: జవాబు
          ఇచ్చిన తరువాత, పునరాలోచన కోసం మార్క్ చేసిన ప్రశ్నలు లేదా జవాబులు సేవ్
          చేసిన ప్రశ్నలు మాత్రమె మూల్యాంకనం కోసం పరిగణలోనికి తీసుకోబడును.
          <h2 className="font-medium">
            <br />
            Navigating through sections: ఒక సెక్షన్ నుండి మరొక సెక్షన్ కు
            వెళ్ళడం (నావిగేషన్):
            <br />
          </h2>
          10. Various section names in this question paper are displayed on the
          top bar of the screen. Questions in a section can be viewed by
          clicking on the section name. The section name you are currently
          viewing is highlighted. ఈ ప్రశ్నపత్రంలోని సెక్షన్ లు స్క్రీన్ టాప్
          బార్ పై ప్రదర్శించబడతాయి.. సెక్షన్ పేరు పై క్లిక్ చేసి ఆ సెక్షన్ యొక్క
          ప్రశ్నలను వీక్షీంచవచ్చు. మీరు వీక్షీస్తున్న ప్రస్తుత సెక్షన్ హై లైట్
          చేయబడింది.
        </h2>
        <h2 className="m-5 px-10">
          11. After clicking the Save & Next button on the last question for a
          section, you will automatically be taken to the first question of the
          next section. సెక్షన్ లోని ఆఖరు ప్రశ్నకు Save & Next బటన్ పై క్లిక్
          చేసిన తరువాత, మీరు తరువాయి సెక్షన్ లోని మొదటి ప్రశ్నకు స్వయంచాలకంగా
          (ఆటోమేటిక్ గా) తీసుకువెళ్ళబడతారు.
        </h2>
        <h2 className="m-5 px-10">
          12. You can shuffle between sections (subjects) and questions anytime
          during the examination as per your convenience only during the time
          stipulated. మీకు కేటాయించిన సమయంలో మీ సౌలభ్యం ప్రకారం మీరు సెక్షన్ల
          నైన ప్రశ్నల నైన పరీక్ష మధ్యలో షఫుల్ చేసుకోవచ్హు.
        </h2>
        <h2 className="m-5 px-10 pb-5">
          13. Candidate can view the corresponding section summary as part of
          the legend that appears in every section above the question palette.
          ప్రతి సెక్షన్ లో ప్రశ్న పాలెట్ పై ప్రదర్శించే లెజెండ్ ద్వారా అభ్యర్ధి
          సంబంధిత సెక్షన్ సారాంశం చూడవచ్చు.
        </h2>
      </div>
    </div>
  )
}

export { ExamInstructions }
