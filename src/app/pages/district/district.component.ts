import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import * as data from '../../../../public/assets/data.json'
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../../data.service';
import { CommonModule } from '@angular/common';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-district',
  standalone: true,
  imports: [ CommonModule,
    ],
  templateUrl: './district.component.html',
  styleUrl: './district.component.scss'
})
export class DistrictComponent {

  district:any;
  districts:any = [
    {
        "id":1,
        "Name": "Thiruvananthapuram",
        "Description": "Thiruvananthapuram, the capital city of Kerala, is known for its rich cultural heritage, historical monuments, and pristine beaches.",
        "Images": ["https://c0.wallpaperflare.com/preview/197/267/754/ponmudi-india-scenic-beauty-nature.jpg", "thiruvananthapuram_2.jpg", "thiruvananthapuram_3.jpg"],
        "TouristAttractions": [
          {
            "Attraction": "Kovalam Beach",
            "Images": ["kovalam_beach_1.jpg", "kovalam_beach_2.jpg", "kovalam_beach_3.jpg"]
          },
          {
            "Attraction": "Padmanabhaswamy Temple",
            "Images": ["padmanabhaswamy_temple_1.jpg", "padmanabhaswamy_temple_2.jpg", "padmanabhaswamy_temple_3.jpg"]
          },
          {
            "Attraction": "Ponmudi",
            "Images": ["ponmudi_1.jpg", "ponmudi_2.jpg", "ponmudi_3.jpg"]
          }
        ]
      },
      {
        "id":2,
        "Name": "Kollam",
        "Description": "Kollam, known for its cashew processing and coir manufacturing, boasts picturesque backwaters and historical landmarks.",
        "Images": ["images/kollam1.jpg", "images/kollam_2.jpg", "images/kollam_3.jpg"],
        "TouristAttractions": [
          {
            "Attraction": "Ashtamudi Lake",
            "Images": ["images/ashtamudi_lake_1.jpg", "ashtamudi_lake_2.jpg", "ashtamudi_lake_3.jpg"]
          },
          {
            "Attraction": "Thangassery Lighthouse",
            "Images": ["thangassery_lighthouse_1.jpg", "thangassery_lighthouse_2.jpg", "thangassery_lighthouse_3.jpg"]
          },
          {
            "Attraction": "Palaruvi Waterfalls",
            "Images": ["palaruvi_waterfalls_1.jpg", "palaruvi_waterfalls_2.jpg", "palaruvi_waterfalls_3.jpg"]
          }
        ]
      },
      {
        "id":3,
        "Name": "Pathanamthitta",
        "Description": "Pathanamthitta, the pilgrimage hub of Kerala, is home to the famous Sabarimala Temple and scenic landscapes.",
        "Images": ["pathanamthitta_1.jpg", "pathanamthitta_2.jpg", "pathanamthitta_3.jpg"],
        "TouristAttractions": [
          {
            "Attraction": "Sabarimala Temple",
            "Images": ["sabarimala_temple_1.jpg", "sabarimala_temple_2.jpg", "sabarimala_temple_3.jpg"]
          },
          {
            "Attraction": "Perunthenaruvi Waterfalls",
            "Images": ["perunthenaruvi_waterfalls_1.jpg", "perunthenaruvi_waterfalls_2.jpg", "perunthenaruvi_waterfalls_3.jpg"]
          },
          {
            "Attraction": "Aranmula Parthasarathy Temple",
            "Images": ["aranmula_temple_1.jpg", "aranmula_temple_2.jpg", "aranmula_temple_3.jpg"]
          }
        ]
      },
      {
        "id":4,
        "Name": "Alappuzha",
        "Description": "Alappuzha, often referred to as the 'Venice of the East', is famous for its beautiful backwaters and houseboat cruises.",
        "Images": ["alappuzha_1.jpg", "alappuzha_2.jpg", "alappuzha_3.jpg"],
        "TouristAttractions": [
          {
            "Attraction": "Alleppey Backwaters",
            "Images": ["alleppey_backwaters_1.jpg", "alleppey_backwaters_2.jpg", "alleppey_backwaters_3.jpg"]
          },
          {
            "Attraction": "Marari Beach",
            "Images": ["marari_beach_1.jpg", "marari_beach_2.jpg", "marari_beach_3.jpg"]
          },
          {
            "Attraction": "Krishnapuram Palace",
            "Images": ["krishnapuram_palace_1.jpg", "krishnapuram_palace_2.jpg", "krishnapuram_palace_3.jpg"]
          }
        ]
      },
      {
        "id":5,
        "Name": "Kottayam",
        "Description": "Kottayam, known as the 'Land of Letters, Lakes and Latex', offers serene backwaters, bird sanctuaries, and ancient temples.",
        "Images": ["kottayam_1.jpg", "kottayam_2.jpg", "kottayam_3.jpg"],
        "TouristAttractions": [
          {
            "Attraction": "Vembanad Lake",
            "Images": ["vembanad_lake_1.jpg", "vembanad_lake_2.jpg", "vembanad_lake_3.jpg"]
          },
          {
            "Attraction": "Kumarakom Bird Sanctuary",
            "Images": ["kumarakom_bird_sanctuary_1.jpg", "kumarakom_bird_sanctuary_2.jpg", "kumarakom_bird_sanctuary_3.jpg"]
          },
          {
            "Attraction": "Thirunakkara Mahadeva Temple",
            "Images": ["thirunakkara_temple_1.jpg", "thirunakkara_temple_2.jpg", "thirunakkara_temple_3.jpg"]
          }
        ]
      },
      {
        "id":6,
        "Name": "Idukki",
        "Description": "Idukki, a landlocked district in Kerala, is known for its mountainous terrain, dense forests, and picturesque tea gardens.",
        "Images": ["idukki_1.jpg", "idukki_2.jpg", "idukki_3.jpg"],
        "TouristAttractions": [
          {
            "Attraction": "Munnar",
            "Images": ["munnar_1.jpg", "munnar_2.jpg", "munnar_3.jpg"]
          },
          {
            "Attraction": "Thekkady",
            "Images": ["thekkady_1.jpg", "thekkady_2.jpg", "thekkady_3.jpg"]
          },
          {
            "Attraction": "Idukki Arch Dam",
            "Images": ["idukki_arch_dam_1.jpg", "idukki_arch_dam_2.jpg", "idukki_arch_dam_3.jpg"]
          }
        ]
      },
      {
        "id":7,
        "Name": "Ernakulam",
        "Description": "Ernakulam, a bustling commercial hub, offers a mix of urban and rural experiences, with its historic sites, vibrant markets, and serene backwaters.",
        "Images": ["ernakulam_1.jpg", "ernakulam_2.jpg", "ernakulam_3.jpg"],
        "TouristAttractions": [
          {
            "Attraction": "Fort Kochi",
            "Images": ["fort_kochi_1.jpg", "fort_kochi_2.jpg", "fort_kochi_3.jpg"]
          },
          {
            "Attraction": "Marine Drive",
            "Images": ["marine_drive_1.jpg", "marine_drive_2.jpg", "marine_drive_3.jpg"]
          },
          {
            "Attraction": "Mattancherry Palace",
            "Images": ["mattancherry_palace_1.jpg", "mattancherry_palace_2.jpg", "mattancherry_palace_3.jpg"]
          }
        ]
      },
      {
        "id":8,
        "Name": "Thrissur",
        "Description": "Thrissur, known as the cultural capital of Kerala, is famous for its temples, festivals, and classical arts.",
        "Images": ["thrissur_1.jpg", "thrissur_2.jpg", "thrissur_3.jpg"],
        "TouristAttractions": [
          {
            "Attraction": "Athirappilly Waterfalls",
            "Images": ["athirappilly_waterfalls_1.jpg", "athirappilly_waterfalls_2.jpg", "athirappilly_waterfalls_3.jpg"]
          },
          {
            "Attraction": "Vadakkunnathan Temple",
            "Images": ["vadakkunnathan_temple_1.jpg", "vadakkunnathan_temple_2.jpg", "vadakkunnathan_temple_3.jpg"]
          },
          {
            "Attraction": "Guruvayur Temple",
            "Images": ["guruvayur_temple_1.jpg", "guruvayur_temple_2.jpg", "guruvayur_temple_3.jpg"]
          }
        ]
      },
      {
        "id":9,
        "Name": "Palakkad",
        "Description": "Palakkad, often referred to as the 'Gateway of Kerala', is known for its historic fort, scenic landscapes, and rich cultural heritage.",
        "Images": ["palakkad_1.jpg", "palakkad_2.jpg", "palakkad_3.jpg"],
        "TouristAttractions": [
          {
            "Attraction": "Palakkad Fort",
            "Images": ["palakkad_fort_1.jpg", "palakkad_fort_2.jpg", "palakkad_fort_3.jpg"]
          },
          {
            "Attraction": "Silent Valley National Park",
            "Images": ["silent_valley_1.jpg", "silent_valley_2.jpg", "silent_valley_3.jpg"]
          },
          {
            "Attraction": "Malampuzha Dam",
            "Images": ["malampuzha_dam_1.jpg", "malampuzha_dam_2.jpg", "malampuzha_dam_3.jpg"]
          }
        ]
      },
      {
        "id":10,
        "Name": "Malappuram",
        "Description": "Malappuram, known for its rich history and natural beauty, offers a unique blend of cultural and ecological attractions.",
        "Images": ["malappuram_1.jpg", "malappuram_2.jpg", "malappuram_3.jpg"],
        "TouristAttractions": [
          {
            "Attraction": "Kottakkunnu",
            "Images": ["kottakkunnu_1.jpg", "kottakkunnu_2.jpg", "kottakkunnu_3.jpg"]
          },
          {
            "Attraction": "Nedumkayam Rainforest",
            "Images": ["nedumkayam_rainforest_1.jpg", "nedumkayam_rainforest_2.jpg", "nedumkayam_rainforest_3.jpg"]
          },
          {
            "Attraction": "Thirunavaya Temple",
            "Images": ["thirunavaya_temple_1.jpg", "thirunavaya_temple_2.jpg", "thirunavaya_temple_3.jpg"]
          }
        ]
      },
      {
        "id":11,
        "Name": "Kozhikode",
        "Description": "Kozhikode, a historic city known for its spice trade, features beautiful beaches, lush greenery, and vibrant cultural traditions.",
        "Images": ["kozhikode_1.jpg", "kozhikode_2.jpg", "kozhikode_3.jpg"],
        "TouristAttractions": [
          {
            "Attraction": "Kozhikode Beach",
            "Images": ["kozhikode_beach_1.jpg", "kozhikode_beach_2.jpg", "kozhikode_beach_3.jpg"]
          },
          {
            "Attraction": "Beypore",
            "Images": ["beypore_1.jpg", "beypore_2.jpg", "beypore_3.jpg"]
          },
          {
            "Attraction": "Thusharagiri Waterfalls",
            "Images": ["thusharagiri_waterfalls_1.jpg", "thusharagiri_waterfalls_2.jpg", "thusharagiri_waterfalls_3.jpg"]
          }
        ]
      },
      {
        "id":12,
        "Name": "Wayanad",
        "Description": "Wayanad, nestled in the Western Ghats, is known for its scenic beauty, wildlife sanctuaries, and historical sites.",
        "Images": ["wayanad_1.jpg", "wayanad_2.jpg", "wayanad_3.jpg"],
        "TouristAttractions": [
          {
            "Attraction": "Edakkal Caves",
            "Images": ["edakkal_caves_1.jpg", "edakkal_caves_2.jpg", "edakkal_caves_3.jpg"]
          },
          {
            "Attraction": "Chembra Peak",
            "Images": ["chembra_peak_1.jpg", "chembra_peak_2.jpg", "chembra_peak_3.jpg"]
          },
          {
            "Attraction": "Banasura Sagar Dam",
            "Images": ["banasura_sagar_dam_1.jpg", "banasura_sagar_dam_2.jpg", "banasura_sagar_dam_3.jpg"]
          }
        ]
      },
      {
        "id":13,
        "Name": "Kannur",
        "Description": "Kannur, with its pristine beaches and historic forts, is a land of folklore, Theyyam rituals, and vibrant festivals.",
        "Images": ["kannur_1.jpg", "kannur_2.jpg", "kannur_3.jpg"],
        "TouristAttractions": [
          {
            "Attraction": "Muzhappilangad Beach",
            "Images": ["muzhappilangad_beach_1.jpg", "muzhappilangad_beach_2.jpg", "muzhappilangad_beach_3.jpg"]
          },
          {
            "Attraction": "St. Angelo Fort",
            "Images": ["st_angelo_fort_1.jpg", "st_angelo_fort_2.jpg", "st_angelo_fort_3.jpg"]
          },
          {
            "Attraction": "Paithalmala",
            "Images": ["paithalmala_1.jpg", "paithalmala_2.jpg", "paithalmala_3.jpg"]
          }
        ]
      },
      {
        "id":14,
        "Name": "Kasaragod",
        "Description": "Kasaragod, the northernmost district of Kerala, is known for its forts, rivers, and the unique Theyyam art form.",
        "Images": ["kasaragod_1.jpg", "kasaragod_2.jpg", "kasaragod_3.jpg"],
        "TouristAttractions": [
          {
            "Attraction": "Bekal Fort",
            "Images": ["bekal_fort_1.jpg", "bekal_fort_2.jpg", "bekal_fort_3.jpg"]
          },
          {
            "Attraction": "Chandragiri Fort",
            "Images": ["chandragiri_fort_1.jpg", "chandragiri_fort_2.jpg", "chandragiri_fort_3.jpg"]
          },
          {
            "Attraction": "Ananthapura Lake Temple",
            "Images": ["ananthapura_temple_1.jpg", "ananthapura_temple_2.jpg", "ananthapura_temple_3.jpg"]
          }
        ]
      }
    
  ];

  id: number | null = null;
  data: any;    
  
  // constructor() {}
  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {
    const districtName = this.route.snapshot.paramMap.get('Name');
    console.log(districtName);
    if (districtName) {
      this.district = this.districts.find(
        (d: { Name: string; }) => d.Name.toLowerCase() === districtName.toLowerCase()
      );
      console.log(this.district);
    }
  }
  

}
