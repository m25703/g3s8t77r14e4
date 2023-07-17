import React, { useEffect } from 'react';

const Vp = () => {
  useEffect(() => {

    //import the desired configuration for the selected video here
    const playerConfig = {
        context: {
          mode: 'play',
          authToken: '',
          sid: '7283cf2e-d215-9944-b0c5-269489c6fa56',
          did: '3c0a3724311fe944dec5df559cc4e006',
          uid: 'anonymous',
          channel: '505c7c48ac6dc1edc9b08f21db5a571d',
          pdata: { id: 'prod.diksha.portal', ver: '3.2.12', pid: 'sunbird-portal.contentplayer' },
          contextRollup: { l1: '505c7c48ac6dc1edc9b08f21db5a571d' },
          tags: [
            ''
          ],
          cdata: [],
          timeDiff: 0,
          objectRollup: {},
          host: '',
          endpoint: '',
          userData: {
            firstName: 'Username',
            lastName: ' '
          }
        },
        config: {
          traceId: 'afhjgh',
          sideMenu: {
            showShare: true,
            showDownload: true,
            showReplay: true,
            showExit: true
          }
        },
        metadata: {
          "copyright": "NCERT",
          "keywords": [
              "NCERT",
              "CLASS12",
              "Class 12_Sociology_Hindi_Book 2_CH01_EP01"
          ],
          "subject": [
              "Sociology"
          ],
          "channel": "0125196274181898243",
          "language": [
              "English"
          ],
          "mimeType": "video/mp4",
          "objectType": "Content",
          "gradeLevel": [
              "Class 12"
          ],
          "appIcon": "https://obj.diksha.gov.in/ntp-content-production/content/do_31311770804464025611209/artifact/206ee204-bf15-495c-97a4-1fc462291dbf.thumb.png",
          "primaryCategory": "Explanation Content",
          "artifactUrl": "https://obj.diksha.gov.in/ntp-content-production/content/assets/do_31311770804464025611209/l529-class-12_sociology_hindi_book-2_ch01_ep01.mp4",
          "contentType": "ExplanationResource",
          "identifier": "do_31311770804464025611209",
          "audience": [
              "Student"
          ],
          "visibility": "Default",
          "author": "CIET",
          "mediaType": "content",
          "osId": "org.ekstep.quiz.app",
          "languageCode": [
              "en"
          ],
          "license": "CC BY-SA 4.0",
          "name": "Class 12_Sociology_Hindi_Book 2_CH01_EP01",
          "status": "Live",
          "code": "383ac3c3-d789-456e-bb9c-01524c4a7ac3",
          "description": "à¤­à¤¾à¤°à¤¤ à¤®à¥‡à¤‚ à¤¸à¤¾à¤®à¤¾à¤œà¤¿à¤• à¤ªà¤°à¤¿à¤µà¤°à¥à¤¤à¤¨ à¤à¤µà¤‚ à¤µà¤¿à¤•à¤¾à¤¸",
          "streamingUrl": "https://mibm2gd4gvfa5jjuaizursbvvi.apigateway.ap-mumbai-1.oci.customer-oci.com/ocid1.mediaasset.oc1.ap-mumbai-1.amaaaaaadut4dhyao2th5or6kgzzn4eqkl4idnv3hjpaf6hqdcnvz7osjc7a/master.m3u8",
          "medium": [
              "Hindi"
          ],
          "createdOn": "2020-09-28T08:45:20.294+0000",
          "copyrightYear": 2020,
          "lastUpdatedOn": "2023-03-15T11:01:45.029+0000",
          "creator": "Creator",
          "pkgVersion": 2,
          "versionKey": "1682417692900",
          "framework": "ncert_k-12",
          "createdBy": "220d4745-6764-498d-ad37-5e49b8cce716",
          "resourceType": "Learn",
          "licenseDetails": {
              "name": "CC BY-SA 4.0",
              "url": "https://creativecommons.org/licenses/by-sa/4.0/legalcode",
              "description": "For details see below:"
          }
      },
        data: {}
      }


    const videoElement = document.createElement('sunbird-video-player');
    videoElement.setAttribute('player-config', JSON.stringify(playerConfig));

    videoElement.addEventListener('playerEvent', (event) => {
      console.log('On playerEvent', event);
    });

    videoElement.addEventListener('telemetryEvent', (event) => {
      console.log('On telemetryEvent', event);
    });

    const myPlayer = document.getElementById('my-player');
    myPlayer.appendChild(videoElement);

    // Clean up the video player when the component unmounts
    return () => {
      myPlayer.removeChild(videoElement);
    };
  }, []);

  return <div className="player-grid" id="my-player"></div>;
};

export default Vp;
