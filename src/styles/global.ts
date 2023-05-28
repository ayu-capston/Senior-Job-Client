// global.ts
import { createGlobalStyle } from 'styled-components';
import SpoqaHanSansNeoBold from '../assets/font/SpoqaHanSansNeo-Bold.woff2';
import SpoqaHanSansNeoLight from '../assets/font/SpoqaHanSansNeo-Light.woff2';
import SpoqaHanSansNeoMedium from '../assets/font/SpoqaHanSansNeo-Medium.woff2';
import SpoqaHanSansNeoRegular from '../assets/font/SpoqaHanSansNeo-Regular.woff2';
import SpoqaHanSansNeoThin from '../assets/font/SpoqaHanSansNeo-Thin.woff2';

export default createGlobalStyle`
  @font-face {
        font-family: 'SpoqaHanSansNeoBold';
        src: local('SpoqaHanSansNeoBold'), local('SpoqaHanSansNeoBold');
        font-style: normal;
        src: url(${SpoqaHanSansNeoBold}) format('truetype');
  }
  @font-face {
        font-family: 'SpoqaHanSansNeoLight';
        src: local('SpoqaHanSansNeoLight'), local('SpoqaHanSansNeoLight');
        font-style: normal;
        src: url(${SpoqaHanSansNeoLight}) format('truetype');
  }
  @font-face {
        font-family: 'SpoqaHanSansNeoMedium';
        src: local('SpoqaHanSansNeoMedium'), local('SpoqaHanSansNeoMedium');
        font-style: normal;
        src: url(${SpoqaHanSansNeoMedium}) format('truetype');
  }
  @font-face {
        font-family: 'SpoqaHanSansNeoRegular';
        src: local('SpoqaHanSansNeoRegular'), local('SpoqaHanSansNeoRegular');
        font-style: normal;
        src: url(${SpoqaHanSansNeoRegular}) format('truetype');
  }
  @font-face {
        font-family: 'SpoqaHanSansNeoThin';
        src: local('SpoqaHanSansNeoThin'), local('SpoqaHanSansNeoThin');
        font-style: normal;
        src: url(${SpoqaHanSansNeoThin}) format('truetype');
  }
`;
