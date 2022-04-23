import React from 'react'
import './TermsAndConditions.css'
import roadmap from "../assets/owner/raodmap.png"
import bone from'../assets/bone-removebg-preview.png'
import nft from'../assets/Aqua.png'
import { ethers, BigNumber } from "ethers";
import { useEffect, useState} from "react";
import mint from "../../src/mintAbi.json"
import HeaderPages from "./HeaderPages";
import Header from "./Header";
import Footer from "./Footer";
import {Container} from "react-bootstrap";
import HeaderMobile from "./HeaderMobile";
import ScrollAnimate from "react-scroll-fade-animation";
const mintAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";



const PrivacyPolicy = () => {




    return (
        <div className="TermsAndConditions">
            <HeaderMobile/>
            <div className="space"> </div>
            <ScrollAnimate path={'bottom'}>
            <Container>
                <div className="text-cont">
                    <p className="text-h">
                    Termenii si Conditiile
                    </p>
                    <p className="text">
                    Condiţii Generale pentru utilizarea site-ului www.piatranaturalademunte.com
                    </p>
                    <p className="text-h">
                    INTRODUCERE
                    </p>
                    <p className="text">

                    Prezentele Condiţii Generale definesc condiţiile de utilizare a site-ului www.piatranaturalademunte.com de către potenţialii vizitatori sau clienţi. Accesând şi navigând pe acest site, acceptaţi termenii de utilizare descrişi în continuare.
                    </p>
                    <p className="text">
                    DREPTURILE ASUPRA CONŢINUTULUI SITE-ULUI
                    </p>

                    <p className="text">
                    S.C. Caralin S.R.L. , nu va transfera titlul de proprietate asupra aplicaţiilor software.
                    </p>

                    <p className="text">

                    Caralin deţine drepturi complete şi depline asupra titlului de proprietate şi prin aceasta toate drepturile de autor şi cele brevetate. Nu aveţi dreptul să redistribuiţi, vindeţi, decompilaţi, dezasamblaţi aplicaţia software într-o formă perceptibilă de către oameni.
                    </p>

                    <p className="text">
                    Toate informaţiile, produsele sau aplicaţiile conţinute în acest site sunt proprietatea Caralin, care îşi rezervă dreptul de a modifica conţinutul şi/sau structura site-ului în orice moment şi fară nici o informare prealabilă.
                    </p>
                    <p className="text">
                    Întregul conţinut al site-ului www.piatranaturalademunte.com este protejat prin Legea drepturilor de autor, toate drepturile fiind rezervate. Toate drepturile referitoare la pagini, conţinutul şi prezentarea site-ului sunt deţinute de Caralin. Este interzisă copierea, modificarea, afişarea, distribuirea, transmiterea, publicarea, comercializarea, licenţierea, crearea unor materiale derivate sau utilizarea conţinutului site-ului în orice scop fară confirmarea scrisă din partea Caralin.
                    </p>
                    <p className="text">
                    Informațiile prezente pe www.piatranaturalademunte.com sunt de interes general și sunt puse la dispoziția utilizatorilor în mod gratuit. Prin termenul “utilizator” al acestei pagini se înțelege orice persoana fizică sau juridică care va accesa pagina. Puteți copia și tipări conținutul paginii www.piatranaturalademunte.com pentru folosința dumneavoastră personală, fără intenții comerciale. În orice alte situații, conținutul www.piatranaturalademunte.com nu poate fi reprodus, modificat sau exploatat fără consimțământul explicit al reprezentanților Comunității DPO.
                    </p>
                    <p className="text-h">
                        NEANGAJAREA RĂSPUNDERII</p>
                    <p className="text">
                    Conţinutul informaţiilor se referă la descrierea într-un anumit grad de detaliere a activităţilor, produselor şi serviciilor Caralin. Caralin nu va acorda nici o garanţie referitoare la:
                    </p>
                    <p className="text">
                    – evitarea utilizării anevoioase sau întreruperii în utilizare a site-ului;
                    </p>
                    <p className="text">
                    – neafectarea în sens negativ a altor sisteme prin utilizarea site-ului;
                    </p>
                    <p className="text">
                    – inexistenţa pe site-ul pus la dispoziţie a viruşilor sau alte componente care ar putea dăuna utilizatorilor.
                    </p>
                    <p className="text">
                    Astfel, Caralin nu poate fi responsabilă pentru nici un fel de daune directe sau indirecte produse prin utilizarea site-ului său.
                    </p>
                    <p className="text">
                    Toate informațiile prezentate pe site cu privire la produsele GDPRComplet, prețuri, informații, campanii și promoții de marketing, aspecte tehnice, sunt prezentate cu titlu informativ.
                    </p>
                    <p className="text">
                    Nimic din conținutul site-ului www.piatranaturalademunte.com nu poate constitui o ofertă fermă de a contracta și nu poate angaja răspunderea Caralin în lipsa unor acorduri ulterioare.
                    </p>
                    <p className="text">
                    Conținutul paginii web www.piatranaturalademunte.com, a informațiilor și a altor materiale prezentate nu reprezintă o consultație juridică în sensul Legii nr. 51/1995.
                    </p>
                    <p className="text">
                    GDPR este un set de reguli bazat pe principii complexe, care este deschis la interpretare și conține, de asemenea, numeroase domenii în care statele membre sunt invitate să intervină. În prezent există foarte puține îndrumări cu privire la implementarea GDPR și este posibil ca Autoritățile de Supraveghere să aibă puncte de vedere diferite față de cele exprimate în acest șablon. În ciuda eforturilor noastre de a oferi cele mai bune servicii, nu putem anticipa cu exactitate modul în care Autoritatea de Supraveghere sau instanțele de judecată vor interpreta Regulamentul.
                    </p>
                    <p className="text">
                    www.piatranaturalademunte.com are intenția de îndruma și de a ajuta în implementarea cât mai corectă a Regulamentului (UE) 2016/679 privind protecția persoanelor fizice în ceea ce privește prelucrarea datelor cu caracter personal și privind libera circulație a acestor date și de abrogare a Directivei 95/46/CE.
                    </p>
                    <p className="text">
                    GDPR Complet, www.piatranaturalademunte.com, reprezentanții și consultanții lor nu fac nicio declarație, promisiune sau garanție cu privire la exactitatea, exhaustivitatea sau caracterul adecvat al prezentului conținut, al îndrumărilor și a consultanței, nu își asumă nicio obligație de rezultat sau diligență față de nicio persoană, exclud în mod expres și neagă răspunderea pentru orice cost, pierdere sau daunele suferite ca urmare a utilizării conținutului.
                    </p>
                    <p className="text-h">
                    OBIECTIVUL CONŢINUTULUI SITE-ULUI
                    </p>
                    <p className="text">
                    Obiectivul conţinutului site-ului este de a transmite informaţii actualizate şi exacte.
                    </p>
                    <p className="text">
                    Caralin nu poate garanta că prezentele pagini nu conţin erori, şi asigură că va depune toate diligenţele pentru realizarea unei informări corecte şi remedierea eventualelor erori.
                    </p>
                    <p className="text">
                    Orice persoană care doreşte să-şi procure unul din serviciile sau produsele prezentate în site este rugată să contacteze Caralin prin unul din mijloacele afişate în pagina de Contact a site-ului, pentru a se informa atât asupra disponibilităţii serviciului sau produsului în cauză cât şi asupra condiţiilor contractuale, tarifelor şi informaţiilor tehnice sau de altă natură.
                    </p>
                    <p className="text-h">
                    INFORMAŢII PERSONALE
                    </p>
                    <p className="text">
                    Când prin intermediul prezentului site vă sunt solicitate informaţii, aceasta are ca scop identificarea dumneavoastră sau posibilitatea de a vă contacta. Acest lucru este cu atât mai necesar în cazul folosirii aplicaţiilor disponibile pe site.
                    </p>
                    <p className="text">
                    Natura informaţiilor solicitate se referă în special la date personale (nume, adresă, numere de telefon), adresă de e-mail, modul în care sunt utilizate sau intenţionează să fie utilizate produsele şi/sau serviciile Caralin, dar poate include şi alte informaţii aflate în strânsă legătură cu utilizarea serviciilor şi/sau produselor solicitate.
                    </p>
                    <p className="text">
                    Cu scopul de a răspunde mai bine nevoilor şi întrebărilor utilizatorilor site-ului, informaţiile solicitate prin intermediul acestui site vor face obiectul unei stocări şi prelucrări electronice.
                    </p>
                    <p className="text-h">
                    COMUNICAREA CU VIZITATORII SITE-ULUI
                    </p>
                    <p className="text">
                    Metodele prin care vizitatorii site-ului inițiază contactul cu noi sunt: chat online, adresă de e-mail, număr de telefon, formularele prezente pe site.
                    </p>
                    <p className="text">
                    Această contactare are loc pentru a cere informații despre produsele noastre, pentru a ne solicita oferte de preț, pentru a ne consulta părerea pe diferite subiecte, pentru a beneficia de serviciile noastre, pentru a facilita procesul de plată.
                    </p>
                    <p className="text">
                    Inițierea contactului de către d-voastră îl considerăm / reprezintă consimțământul d-voastră pentru a vi se răspunde înapoi, a vi se furniza informațiile, a primi detalii de plata sau orice informație solicitată.
                    </p>
                    <p className="text">
                    Ulterior desfășurării comunicării inițiale, Caralin S.R.L.  își stabilește ca interes legitim posibilitatea de a vă transmite și comunica informații ulterioare, relevante solicitării d-voastră, fără a avea caracter de newsletter. Aceste informații pot apărea în urma îmbunătățirii produselor noastre, lansarea de produse noi care vin în ajutorul d-voastră sau aspecte care au legătură cu tematica discutată. Comunicarea se va realiza prin intermediul Microsoft Outlook sau MailChimp.
                    </p>
                    <p className="text">
                    În acest sens Caralin SRL și-a stabilit un termen rezonabil de prelucrare ulterioară de 18 luni de la data inițierii comunicării.
                    </p>
                    <p className="text">
                    LEGĂTURA CU ALTE SITE-URI
                    </p>
                    <p className="text">
                    Prezentul site poate conţine legături sau trimiteri către alte site-uri considerate de Caralin utile în legătură cu conţinutul site-ului său şi care nu se află sub controlul sau îndrumarea sa. În cazul utilizării acestor legături sau trimiteri se vor aplica condiţiile generale de utilizare corespunzătoare acelor site-uri.
                    </p>
                    <p className="text">
                    Caralin nu poate garanta/controla actualitatea/exactitatea informaţiilor prezente pe site-urile unor terţi, la care se face trimitere de pe site-ul său.
                    </p>
                    <p className="text">
                    INFORMAŢIILE OFERITE PRIN INTERMEDIUL SITE-ULUI
                    </p>
                    <p className="text">
                    Orice persoană care vizitează site-ul www.piatranaturalademunte.com şi care oferă date sau informaţii cu caracter personal prin intermediul acestui site îşi manifestă acordul în mod expres şi neechivoc pentru următoarele: prelucrarea acestor date şi informaţii personale de către Caralin în vederea efectuării de studii de piaţă; transmiterii de materiale promoţionale specifice operaţiunilor de marketing direct; soluţionarea de către Caralin a cererilor, întrebărilor şi reclamaţiilor adresate (a se vedea pagina Contact din site); alte activităţi întreprinse de Caralin şi permise de lege, ce nu fac obiectul unei aprobări din partea destinatarului.
                    </p>
                    <p className="text">
                    Caralin va păstra confidenţialitatea acestor informaţii.
                    </p>
                    <p className="text">
                    Utilizarea în continuare a acestui site constituie acordul expres şi neechivoc al dumneavoastră în conformitate cu directivele GDPR pentru protecţia persoanelor cu privire la prelucrarea datelor cu caracter personal şi libera circulaţie a acestor date.
                    </p>
                    <p className="text">
                    Pentru orice nelămurire în legătură cu exercitarea drepturilor dumneavoastră referitoare la utilizarea site-ului şi la protecţia utilizării vă rugăm să ne contactaţi prin intermediul secţiunii Contact din site.
                    </p>
                    <p className="text">
                    Termene și condiții realizate de echipa de consultanță GDPR Complet.
                    </p>
                    <p className="text">
                    Cum se aplică gdpr în România.
                    </p>

                </div>
                <div className="space"> </div>
            </Container>
            </ScrollAnimate>
            <Footer/>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Fredoka&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet"/>

        </div>

    )

}

export default PrivacyPolicy
