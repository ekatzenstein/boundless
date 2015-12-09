import UITokenizedInput from '../index';
import UIView from '../../UIView';
import React from 'react';

export default class UITokenizedInputDemo extends UIView {
    initialState() {
        return {
            countries: [
                {text: 'Afghanistan'},
                {text: 'Albania'},
                {text: 'Algeria'},
                {text: 'American Samoa'},
                {text: 'Andorra'},
                {text: 'Angola'},
                {text: 'Anguilla'},
                {text: 'Antarctica'},
                {text: 'Antigua and Barbuda'},
                {text: 'Argentina'},
                {text: 'Armenia'},
                {text: 'Aruba'},
                {text: 'Australia'},
                {text: 'Austria'},
                {text: 'Azerbaijan'},
                {text: 'Bahamas'},
                {text: 'Bahrain'},
                {text: 'Bangladesh'},
                {text: 'Barbados'},
                {text: 'Belarus'},
                {text: 'Belgium'},
                {text: 'Belize'},
                {text: 'Benin'},
                {text: 'Bermuda'},
                {text: 'Bhutan'},
                {text: 'Bolivia'},
                {text: 'Bosnia and Herzegovina'},
                {text: 'Botswana'},
                {text: 'Bouvet Island'},
                {text: 'Brazil'},
                {text: 'British Indian Ocean Territory'},
                {text: 'Brunei Darussalam'},
                {text: 'Bulgaria'},
                {text: 'Burkina Faso'},
                {text: 'Burundi'},
                {text: 'Cambodia'},
                {text: 'Cameroon'},
                {text: 'Canada'},
                {text: 'Cape Verde'},
                {text: 'Caribbean Netherlands'},
                {text: 'Cayman Islands'},
                {text: 'Central African Republic'},
                {text: 'Chad'},
                {text: 'Chile'},
                {text: 'China'},
                {text: 'Christmas Island'},
                {text: 'Cocos (Keeling) Islands'},
                {text: 'Colombia'},
                {text: 'Comoros'},
                {text: 'Congo'},
                {text: 'Congo, Democratic Republic of'},
                {text: 'Cook Islands'},
                {text: 'Costa Rica'},
                {text: 'Croatia'},
                {text: 'Cuba'},
                {text: 'Curaçao'},
                {text: 'Cyprus'},
                {text: 'Czech Republic'},
                {text: 'Côte d\'Ivoire'},
                {text: 'Denmark'},
                {text: 'Djibouti'},
                {text: 'Dominica'},
                {text: 'Dominican Republic'},
                {text: 'Ecuador'},
                {text: 'Egypt'},
                {text: 'El Salvador'},
                {text: 'Equatorial Guinea'},
                {text: 'Eritrea'},
                {text: 'Estonia'},
                {text: 'Ethiopia'},
                {text: 'Falkland Islands'},
                {text: 'Faroe Islands'},
                {text: 'Fiji'},
                {text: 'Finland'},
                {text: 'France'},
                {text: 'French Guiana'},
                {text: 'French Polynesia'},
                {text: 'French Southern Territories'},
                {text: 'Gabon'},
                {text: 'Gambia'},
                {text: 'Georgia'},
                {text: 'Germany'},
                {text: 'Ghana'},
                {text: 'Gibraltar'},
                {text: 'Greece'},
                {text: 'Greenland'},
                {text: 'Grenada'},
                {text: 'Guadeloupe'},
                {text: 'Guam'},
                {text: 'Guatemala'},
                {text: 'Guernsey'},
                {text: 'Guinea'},
                {text: 'Guinea-Bissau'},
                {text: 'Guyana'},
                {text: 'Haiti'},
                {text: 'Heard and McDonald Islands'},
                {text: 'Honduras'},
                {text: 'Hong Kong'},
                {text: 'Hungary'},
                {text: 'Iceland'},
                {text: 'India'},
                {text: 'Indonesia'},
                {text: 'Iran'},
                {text: 'Iraq'},
                {text: 'Ireland'},
                {text: 'Isle of Man'},
                {text: 'Israel'},
                {text: 'Italy'},
                {text: 'Jamaica'},
                {text: 'Japan'},
                {text: 'Jersey'},
                {text: 'Jordan'},
                {text: 'Kazakhstan'},
                {text: 'Kenya'},
                {text: 'Kiribati'},
                {text: 'Kuwait'},
                {text: 'Kyrgyzstan'},
                {text: 'Lao People\'s Democratic Republic'},
                {text: 'Latvia'},
                {text: 'Lebanon'},
                {text: 'Lesotho'},
                {text: 'Liberia'},
                {text: 'Libya'},
                {text: 'Liechtenstein'},
                {text: 'Lithuania'},
                {text: 'Luxembourg'},
                {text: 'Macau'},
                {text: 'Macedonia'},
                {text: 'Madagascar'},
                {text: 'Malawi'},
                {text: 'Malaysia'},
                {text: 'Maldives'},
                {text: 'Mali'},
                {text: 'Malta'},
                {text: 'Marshall Islands'},
                {text: 'Martinique'},
                {text: 'Mauritania'},
                {text: 'Mauritius'},
                {text: 'Mayotte'},
                {text: 'Mexico'},
                {text: 'Micronesia, Federated States of'},
                {text: 'Moldova'},
                {text: 'Monaco'},
                {text: 'Mongolia'},
                {text: 'Montenegro'},
                {text: 'Montserrat'},
                {text: 'Morocco'},
                {text: 'Mozambique'},
                {text: 'Myanmar'},
                {text: 'Namibia'},
                {text: 'Nauru'},
                {text: 'Nepal'},
                {text: 'New Caledonia'},
                {text: 'New Zealand'},
                {text: 'Nicaragua'},
                {text: 'Niger'},
                {text: 'Nigeria'},
                {text: 'Niue'},
                {text: 'Norfolk Island'},
                {text: 'North Korea'},
                {text: 'Northern Mariana Islands'},
                {text: 'Norway'},
                {text: 'Oman'},
                {text: 'Pakistan'},
                {text: 'Palau'},
                {text: 'Palestine, State of'},
                {text: 'Panama'},
                {text: 'Papua New Guinea'},
                {text: 'Paraguay'},
                {text: 'Peru'},
                {text: 'Philippines'},
                {text: 'Pitcairn'},
                {text: 'Poland'},
                {text: 'Portugal'},
                {text: 'Puerto Rico'},
                {text: 'Qatar'},
                {text: 'Romania'},
                {text: 'Russian Federation'},
                {text: 'Rwanda'},
                {text: 'Réunion'},
                {text: 'Saint Barthélemy'},
                {text: 'Saint Helena'},
                {text: 'Saint Kitts and Nevis'},
                {text: 'Saint Lucia'},
                {text: 'Saint Vincent and the Grenadines'},
                {text: 'Saint-Martin (France)'},
                {text: 'Samoa'},
                {text: 'San Marino'},
                {text: 'Sao Tome and Principe'},
                {text: 'Saudi Arabia'},
                {text: 'Senegal'},
                {text: 'Serbia'},
                {text: 'Seychelles'},
                {text: 'Sierra Leone'},
                {text: 'Singapore'},
                {text: 'Sint Maarten (Dutch part)'},
                {text: 'Slovakia'},
                {text: 'Slovenia'},
                {text: 'Solomon Islands'},
                {text: 'Somalia'},
                {text: 'South Africa'},
                {text: 'South Georgia and the South Sandwich Islands'},
                {text: 'South Korea'},
                {text: 'South Sudan'},
                {text: 'Spain'},
                {text: 'Sri Lanka'},
                {text: 'St. Pierre and Miquelon'},
                {text: 'Sudan'},
                {text: 'Suriname'},
                {text: 'Svalbard and Jan Mayen Islands'},
                {text: 'Swaziland'},
                {text: 'Sweden'},
                {text: 'Switzerland'},
                {text: 'Syria'},
                {text: 'Taiwan'},
                {text: 'Tajikistan'},
                {text: 'Tanzania'},
                {text: 'Thailand'},
                {text: 'The Netherlands'},
                {text: 'Timor-Leste'},
                {text: 'Togo'},
                {text: 'Tokelau'},
                {text: 'Tonga'},
                {text: 'Trinidad and Tobago'},
                {text: 'Tunisia'},
                {text: 'Turkey'},
                {text: 'Turkmenistan'},
                {text: 'Turks and Caicos Islands'},
                {text: 'Tuvalu'},
                {text: 'Uganda'},
                {text: 'Ukraine'},
                {text: 'United Arab Emirates'},
                {text: 'United Kingdom'},
                {text: 'United States'},
                {text: 'United States Minor Outlying Islands'},
                {text: 'Uruguay'},
                {text: 'Uzbekistan'},
                {text: 'Vanuatu'},
                {text: 'Vatican'},
                {text: 'Venezuela'},
                {text: 'Vietnam'},
                {text: 'Virgin Islands (British)'},
                {text: 'Virgin Islands (U.S.)'},
                {text: 'Wallis and Futuna Islands'},
                {text: 'Western Sahara'},
                {text: 'Yemen'},
                {text: 'Zambia'},
                {text: 'Zimbabwe'},
            ],
        };
    }

    render() {
        return (
            <div>
                <p>Enter a country you'd like to visit:</p>
                    <UITokenizedInput entities={this.state.countries}
                                      defaultTokenizedEntityIndexes={[11, 55, 211]}
                                      hint={true} />
            </div>
        );
    }
}
