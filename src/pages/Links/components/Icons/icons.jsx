import React from 'react';
import { links } from '../../../../data/links';

const icons = [
    <svg height="2rem" viewBox="0 0 33 32" fill="none">
        <path d="M11 30C11.3944 30.0017 11.7853 29.9252 12.15 29.775C12.5147 29.6248 12.8461 29.4039 13.125 29.125C13.4039 28.8461 13.6248 28.5147 13.775 28.15C13.9252 27.7853 14.0017 27.3944 14 27V21" stroke="url(#paint0_linear_16_178)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 30C21.6056 30.0017 21.2147 29.9252 20.85 29.775C20.4853 29.6248 20.1539 29.4039 19.875 29.125C19.5961 28.8461 19.3752 28.5147 19.225 28.15C19.0748 27.7853 18.9984 27.3944 19 27V21" stroke="url(#paint0_linear_16_178)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19.5 21H21.5C21.8944 20.9984 22.2853 21.0748 22.65 21.225C23.0147 21.3752 23.3461 21.5961 23.625 21.875C23.9039 22.1539 24.1248 22.4853 24.275 22.85C24.4252 23.2147 24.5017 23.6056 24.5 24V25C24.4983 25.3945 24.5748 25.7853 24.725 26.15C24.8752 26.5148 25.0961 26.8461 25.375 27.125C25.6539 27.4039 25.9853 27.6249 26.35 27.775C26.7147 27.9252 27.1056 28.0017 27.5 28" stroke="url(#paint0_linear_16_178)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.5 21H11.5C11.1056 20.9984 10.7147 21.0748 10.35 21.225C9.98527 21.3752 9.6539 21.5961 9.37499 21.875C9.09609 22.1539 8.87517 22.4853 8.72499 22.85C8.57481 23.2147 8.49835 23.6056 8.5 24V25C8.50165 25.3945 8.42519 25.7853 8.27501 26.15C8.12483 26.5148 7.90391 26.8461 7.62501 27.125C7.3461 27.4039 7.01473 27.6249 6.65 27.775C6.28528 27.9252 5.89443 28.0017 5.5 28" stroke="url(#paint0_linear_16_178)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.475 8C13.8875 7.08063 13.0781 6.32394 12.1212 5.79966C11.1644 5.27537 10.091 5.00037 9 5C8.51488 5.83972 8.22379 6.77735 8.14809 7.74417C8.07239 8.711 8.21399 9.68251 8.5625 10.5875C7.87901 11.5951 7.50929 12.7825 7.5 14V15C7.5 16.5913 8.13214 18.1174 9.25736 19.2426C10.3826 20.3679 11.9087 21 13.5 21H19.5C21.0913 21 22.6174 20.3679 23.7426 19.2426C24.8679 18.1174 25.5 16.5913 25.5 15V14C25.4907 12.7825 25.121 11.5951 24.4375 10.5875C24.786 9.68251 24.9276 8.711 24.8519 7.74417C24.7762 6.77735 24.4851 5.83972 24 5C22.909 5.00037 21.8356 5.27537 20.8787 5.79966C19.9219 6.32394 19.1125 7.08063 18.525 8H14.475Z" stroke="url(#paint0_linear_16_178)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    
        <defs>
            <linearGradient id="paint0_linear_16_178" x1="19.5497" y1="0.35" x2="5.19429" y2="13.6311" gradientUnits="userSpaceOnUse">
                <stop stopColor="#547EE9" />
                <stop offset="1" stopColor="#3260CD" />
            </linearGradient>
        </defs>
    </svg>,

    <svg height="2rem" viewBox="0 0 32 32" fill="none" rel="noopener">
        <path d="M26.5 4.5H5.5C4.94772 4.5 4.5 4.94772 4.5 5.5V26.5C4.5 27.0523 4.94772 27.5 5.5 27.5H26.5C27.0523 27.5 27.5 27.0523 27.5 26.5V5.5C27.5 4.94772 27.0523 4.5 26.5 4.5Z" stroke="url(#paint0_linear_16_178)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M15 14V22" stroke="url(#paint0_linear_16_178)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M11 14V22" stroke="url(#paint0_linear_16_178)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M15 17.5C15 16.5717 15.3687 15.6815 16.0251 15.0251C16.6815 14.3687 17.5717 14 18.5 14C19.4283 14 20.3185 14.3687 20.9749 15.0251C21.6313 15.6815 22 16.5717 22 17.5V22" stroke="url(#paint0_linear_16_178)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M11 11.5C11.8284 11.5 12.5 10.8284 12.5 10C12.5 9.17157 11.8284 8.5 11 8.5C10.1716 8.5 9.5 9.17157 9.5 10C9.5 10.8284 10.1716 11.5 11 11.5Z" fill="url(#paint0_linear_16_178)"></path>
    </svg>,

    <svg height="2rem" viewBox="0 0 32 32" fill="none">
        <path d="M12 19.5C12.8284 19.5 13.5 18.8284 13.5 18C13.5 17.1716 12.8284 16.5 12 16.5C11.1716 16.5 10.5 17.1716 10.5 18C10.5 18.8284 11.1716 19.5 12 19.5Z" fill="url(#paint0_linear_16_178)" />
        <path d="M20 19.5C20.8284 19.5 21.5 18.8284 21.5 18C21.5 17.1716 20.8284 16.5 20 16.5C19.1716 16.5 18.5 17.1716 18.5 18C18.5 18.8284 19.1716 19.5 20 19.5Z" fill="url(#paint0_linear_16_178)" />
        <path d="M9.2998 10.0001C11.4676 9.32069 13.7281 8.98331 15.9998 9.00011C18.2715 8.98331 20.532 9.32069 22.6998 10.0001" stroke="url(#paint0_linear_16_178)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22.6998 22C20.532 22.6794 18.2715 23.0168 15.9998 23C13.7281 23.0168 11.4676 22.6794 9.2998 22" stroke="url(#paint0_linear_16_178)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19.3752 22.7627L20.8877 25.7627C20.985 25.9673 21.1505 26.1316 21.3558 26.2274C21.5611 26.3232 21.7934 26.3445 22.0127 26.2877C25.0752 25.5377 27.7252 24.2377 29.6502 22.5627C29.7953 22.4347 29.9007 22.2677 29.9539 22.0816C30.0071 21.8955 30.0058 21.6981 29.9502 21.5127L25.7127 7.3627C25.6715 7.21789 25.5968 7.08478 25.4948 6.97406C25.3927 6.86334 25.2662 6.77811 25.1252 6.7252C23.928 6.23404 22.6899 5.84922 21.4252 5.5752C21.1822 5.52197 20.928 5.5601 20.7113 5.68229C20.4946 5.80449 20.3304 6.0022 20.2502 6.2377L19.2627 9.2252" stroke="url(#paint0_linear_16_178)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.6255 22.7627L11.113 25.7627C11.0156 25.9673 10.8501 26.1316 10.6448 26.2274C10.4395 26.3232 10.2073 26.3445 9.98796 26.2877C6.92546 25.5377 4.27546 24.2377 2.35046 22.5627C2.20533 22.4347 2.09994 22.2677 2.04677 22.0816C1.9936 21.8955 1.99488 21.6981 2.05046 21.5127L6.28796 7.3627C6.3292 7.21789 6.40384 7.08478 6.50587 6.97406C6.60791 6.86334 6.73449 6.77811 6.87546 6.7252C8.07266 6.23404 9.31077 5.84922 10.5755 5.5752C10.8185 5.52197 11.0726 5.5601 11.2893 5.68229C11.5061 5.80449 11.6702 6.0022 11.7505 6.2377L12.738 9.2252" stroke="url(#paint0_linear_16_178)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 19.5C12.8284 19.5 13.5 18.8284 13.5 18C13.5 17.1716 12.8284 16.5 12 16.5C11.1716 16.5 10.5 17.1716 10.5 18C10.5 18.8284 11.1716 19.5 12 19.5Z" fill="url(#paint0_linear_16_178)" />
        <path d="M20 19.5C20.8284 19.5 21.5 18.8284 21.5 18C21.5 17.1716 20.8284 16.5 20 16.5C19.1716 16.5 18.5 17.1716 18.5 18C18.5 18.8284 19.1716 19.5 20 19.5Z" fill="url(#paint0_linear_16_178)" />
        <path d="M9.2998 10.0001C11.4676 9.32069 13.7281 8.98331 15.9998 9.00011C18.2715 8.98331 20.532 9.32069 22.6998 10.0001" stroke="url(#paint0_linear_16_178)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22.6998 22C20.532 22.6794 18.2715 23.0168 15.9998 23C13.7281 23.0168 11.4676 22.6794 9.2998 22" stroke="url(#paint0_linear_16_178)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19.3752 22.7627L20.8877 25.7627C20.985 25.9673 21.1505 26.1316 21.3558 26.2274C21.5611 26.3232 21.7934 26.3445 22.0127 26.2877C25.0752 25.5377 27.7252 24.2377 29.6502 22.5627C29.7953 22.4347 29.9007 22.2677 29.9539 22.0816C30.0071 21.8955 30.0058 21.6981 29.9502 21.5127L25.7127 7.3627C25.6715 7.21789 25.5968 7.08478 25.4948 6.97406C25.3927 6.86334 25.2662 6.77811 25.1252 6.7252C23.928 6.23404 22.6899 5.84922 21.4252 5.5752C21.1822 5.52197 20.928 5.5601 20.7113 5.68229C20.4946 5.80449 20.3304 6.0022 20.2502 6.2377L19.2627 9.2252" stroke="url(#paint0_linear_16_178)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.6255 22.7627L11.113 25.7627C11.0156 25.9673 10.8501 26.1316 10.6448 26.2274C10.4395 26.3232 10.2073 26.3445 9.98796 26.2877C6.92546 25.5377 4.27546 24.2377 2.35046 22.5627C2.20533 22.4347 2.09994 22.2677 2.04677 22.0816C1.9936 21.8955 1.99488 21.6981 2.05046 21.5127L6.28796 7.3627C6.3292 7.21789 6.40384 7.08478 6.50587 6.97406C6.60791 6.86334 6.73449 6.77811 6.87546 6.7252C8.07266 6.23404 9.31077 5.84922 10.5755 5.5752C10.8185 5.52197 11.0726 5.5601 11.2893 5.68229C11.5061 5.80449 11.6702 6.0022 11.7505 6.2377L12.738 9.2252" stroke="url(#paint0_linear_16_178)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,

    <svg height="2rem" viewBox="0 0 32 32" fill="none">
        <path d="M21 10H29" stroke="url(#paint0_linear_16_178)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 18.9999H30C29.9979 17.8465 29.5961 16.7295 28.863 15.839C28.13 14.9486 27.1109 14.3397 25.9794 14.1161C24.8479 13.8925 23.6739 14.068 22.6572 14.6127C21.6405 15.1573 20.844 16.0376 20.4034 17.1035C19.9627 18.1693 19.9051 19.355 20.2403 20.4586C20.5756 21.5622 21.2829 22.5155 22.242 23.1562C23.2011 23.7969 24.3525 24.0854 25.5004 23.9726C26.6483 23.8597 27.7215 23.3526 28.5375 22.5374" stroke="url(#paint0_linear_16_178)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 15.5H12.25C13.3772 15.5 14.4582 15.9478 15.2552 16.7448C16.0522 17.5418 16.5 18.6228 16.5 19.75C16.5 20.8772 16.0522 21.9582 15.2552 22.7552C14.4582 23.5522 13.3772 24 12.25 24H4V8H10.75C11.7446 8 12.6984 8.39509 13.4017 9.09835C14.1049 9.80161 14.5 10.7554 14.5 11.75C14.5 12.7446 14.1049 13.6984 13.4017 14.4017C12.6984 15.1049 11.7446 15.5 10.75 15.5" stroke="url(#paint0_linear_16_178)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
];

export default () => links.map(({ _, href }, key) => icons[key] && (
    <a
        target="_blank"
        href={href}
        key={key}
    >
        {icons[key]}
    </a>
));