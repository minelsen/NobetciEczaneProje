import Eczaneler from "./Eczaneler";

import YeniEczaneEkle from "./YeniEczaneEkle";
import React,{useState} from 'react'
import NaviOut from "../LogIn/NaviOut";
import NobetciEkleForm from "./NobetciEkleForm";


const Genel= ({nobetciler, setNobetciler})=> {
    const DUMMY_ECZANELER=[ 
      {id:1,ad:"Hayat Eczanesi",adres:"Yeni Mahallesi, Milli Egemenlik Caddesi, No:9/A Enez / Edirne", ilce:"Enez",telefon:"0(284)811-65-64"},
      {id:2,ad:"Saygın Eczanesi", adres:"Gazi Ömerbey Mahallesi, Kale Caddesi, No:11 Enez / Edirne", ilce:"Enez",telefon:"0(284)811-61-47" },
      {id:3,ad:"Sağlık Eczanesi", adres:"Kale Caddesi, No:9/A Enez / Edirne",ilce:"Enez", telefon:"0(284)811-60-90" },
      {id:4,ad:"Derman Eczanesi",adres:"23 Kasım Caddesi, No:4/D Havsa / Edirne",ilce:"Havsa",telefon:"0(284)336-15-49"},
      {id:5,ad:"Havsa Eczanesi",adres:"Fatih Caddesi, No:14 Havsa / Edirne",ilce:"Havsa",telefon:"0(284)336-10-45"},
      {id:6,ad:"Gün Eczanesi", adres:"Hacı Isa Mahallesi, Fatih Caddesi, No:6 Havsa / Edirne",ilce:"Havsa",telefon:"0(284)336-13-25"},
      {id:7,ad:"Yavuz Eczanesi",adres:"Uzunköprü Caddesi, No:5/B Havsa / Edirne",ilce:"Havsa",telefon:"0(284)336-24-73"},
      {id:8,ad:"Edirne Eczanesi",adres:"Yeni Mahallesi, Fatih Caddesi, No:287/1 Havsa",ilce:"Havsa",telefon:"0(284)336-00-22"},
      {id:9,ad:"Çınar Eczanesi",adres:"Serhat Pasjı No:212 Ipsala / Edirne",ilce:"İpsala",telefon:"0(284)616-10-70"},
      {id:10,ad:"Coşkun Eczanesi",adres:"Bayrambey Mahallesi, Enez Caddesi, No:2 ",ilce:"İpsala",telefon:"0(284)616-10-50"},
      {id:11,ad:"Uysal Eczanesi",adres:"Bayrambey Mahallesi, Hastane Caddesi, No:5",ilce:"İpsala",telefon:"0(284)616-16-04"},
      {id:12,ad:"Dervranoğlu Eczanesi",adres:"Bayrambey Mahallesi, Enez Caddesi, No:28",ilce:"İpsala",telefon:"0(284)616-11-17"},
      {id:13,ad:"Serap Eczanesi",adres:"Yukarı Zaferiye Mahallesi, Çetin Emeç Caddesi, No:2",ilce:"Keşan",telefon:"0(284)715-14-94"},
      {id:14,ad:"Akar Eczanesi",adres:"Yukarı Zaferiye Mahallesi, Hastane Caddesi, No:26/2",ilce:"Keşan",telefon:"0(284)714-71-73"},
      {id:15,ad:"Gökhan eczanesi",adres:"Ispat Cami Mahallesi, Kurtuluş Caddesi, No:103/B",ilce:"Keşan",telefon:"0(284)714-79-64"},
      {id:16,ad:"Merkez Eczanesi",adres:"Büyük Cami Mahallesi, Fevzi Çakmak Caddesi, No:32",ilce:"Keşan",telefon:"0(284)714-55-79"},
      {id:17,ad:"Kanık Eczanesi",adres:"Rasım Ergene Caddesi, Sapçı Apt. No:36",ilce:"Keşan",telefon:"0(284)715-38-40"},
      {id:41,ad:"Beyhan Eczanesi",adres:"Merkez Mahallesi, Adem Yavuz Sokak, Yakup Usta Caddesi, No:1/B ",ilce:"Lalapaşa",telefon:"0(284)321-40-82"},
      {id:42,ad:"Sevil Eczanesi",adres:"Cumhuriyet Caddesi, No:36/B",ilce:"Lalapaşa",telefon:"0(284)321-40-32"},
      {id:43,ad:"Öden Eczanesi",adres:"Cumhuriyet Caddesi, No:6",ilce:"Meriç",telefon:"0(284)415-14-19"},
      {id:44,ad:"Yeni Meriç Eczanesi",adres:"Artezyan Caddesi, No:1",ilce:"Meriç",telefon:"0(284)415-10-51"},
      {id:45,ad:"Nar Eczanesi",adres:"Fatih Mahallesi, Alparslan Türkeş Caddesi No:14/76",ilce:"Merkez",telefon:"0(284)236-34-35"},
      {id:46,ad:"Ülkü Eczanesi",adres:"Hükümet Caddesi, Gürkan Is Hanı No:18",ilce:"Merkez",telefon:"0(284)212-45-96"},
      {id:47,ad:"Rukiye Kantar Eczanesi",adres:"Şükrüpaşa Mahallesi, Mithat Vardar Caddesi, 20 Z.01 (Tokatlılar Mevkii)",ilce:"Merkez",telefon:"0(284)213-46-47"},
      {id:48,ad:"Doktoroğlu Eczanesi",adres:"Şükrüpaşa Mahallesi, Ahmet Yalçın Sarıgöl Caddesi No:11/12",ilce:"Merkez",telefon:"0(284)502-00-05"},
      {id:49,ad:"Sancaklı  Eczanesi",adres:"Dilaverbey Mahallesi, Balıkpazarı Caddesi, No:43/B (Kaleiçi Özar Market Yanı)",ilce:"Merkez",telefon:"0(284)212-03-46"},
      {id:50,ad:"Serhat Eczanesi",adres:"Kıyık Caddesi, No:83/A",ilce:"Merkez",telefon:"0(284)213-78-49"},
      {id:118,ad:"Hatipoğlu Eczanesi",adres:"Abdurahman Mahallesi, Uzunkaldırım Caddesi, No:23",ilce:"Merkez",telefon:"0(284)213-88-22"},  
      {id:119,ad:"Süloğlu Eczanesi",adres:"Şafak Mahallesi, Edirne Caddesi, No:109/1",ilce:"Süloğlu",telefon:"0(284)311-36-89"},
      {id:120,ad:"İnci Eczanesi",adres:"Şafak Mahallesi, Edirne Caddesi, No:21/1",ilce:"Süloğlu",telefon:"0(284)311-33-66"},
      {id:121,ad:"Aytin Eczanesi",adres:"Muradiye Mahallesi, Keşan Caddesi, No:25",ilce:"UzunKöprü",telefon:"0(284)513-24-28"},
      {id:122,ad:"Güneş Eczanesi",adres:"Gazi Caddesi, Tallı Çesme Meydanı No:50",ilce:"UzunKöprü",telefon:"0(284)513-67-50"},
      {id:123,ad:"Uğur Eczanesi",adres:"Kenen Evren Caddesi, No:31/A",ilce:"UzunKöprü",telefon:"0(284)513-22-33"}, ]
      const [eczaneler,setEczaneler]=useState(DUMMY_ECZANELER);
      const [selectedEczane, setSelectedEcaze] = useState({});
      console.log(selectedEczane)
      const addEczaneHandler = eczane =>{
        setEczaneler((prevEczaneler)=>{//her yeni eczane eklendipinde eski eczaneleride alarak listeye yeni eczaneleri ekliyor.
            return [...prevEczaneler,eczane];
        });
      }
      const [form, setForm] = useState(  {//form adında başlangıçta boş bir liste oluşturdum. Giriş değerlerini boş tutmazsam uygulama çalışınca hata veriyor.

        ad: '',
        adres: '',
        ilce: '',
        telefon:'',
        date:'',
    }); 
    return (
      <div >
        <div>
          <NaviOut/>
          <NobetciEkleForm form={form} setForm={setForm} nobetciler={nobetciler} setNobetciler={setNobetciler} selectedEczane={selectedEczane} />
          <YeniEczaneEkle onAddEczane={addEczaneHandler}/>
          <Eczaneler  form={form} setForm={setForm} items={eczaneler} setSelectedEczane={setSelectedEcaze}/>
      </div>
      </div>
    );
  }
  export default Genel;