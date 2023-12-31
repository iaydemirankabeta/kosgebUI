import { CompanyTypes, UserRoles } from "../modules/auth/models/user-company.model";

export class UsersTable {
  public static users: any = [
    {
      id: 1,
      username: 'admin',
      password: 'demo',
      email: 'admin@ankabeta.com',
      authToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImI5ZjhhZGY5LTAwMWUtNGM0NC1hMGVmLTA4ZGJlMTM2ODZkNCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiIxMjk3ODAxNTc4IiwiZXhwIjoxNjk5NTc4NjI1LCJpc3MiOiJrb3NnZWJfaXNzdWVyIiwiYXVkIjoia29zZ2ViX2F1ZGllbmNlIn0.JsKAmcvJegRyIQRhZdegt-VYfSpo6hAo_Cgmuik_T2M",
      refreshToken: 'auth-token-f8c137a2c98743f48b643e71161d90aa',
      roles: CompanyTypes.ADMIN, // Administrator
      pic: './assets/media/avatars/300-1.jpg',
      fullname: 'Hasan Oruç',
      firstname: 'Hasan',
      lastname: 'Oruç',
      companyName: 'AnkaBeta',
      country:'Türkiye',
      phone: '531111111',
      language: 'tr',
      timeZone: 'International Date Line West',
      userCompanies:[{
        company: { id: 7, name: 'ADMIN',img : {url:'./assets/media/logos/kosgeb.png'}, type: CompanyTypes.ADMIN},
        roles:[UserRoles.Admin],
        occupation: 'Genel Müdür',
      }],
      website: 'https://ankabeta.com.tr',
      selectedCompany:'',
      emailSettings: {
        emailNotification: true,
        sendCopyToPersonalEmail: false,
        activityRelatesEmail: {
          youHaveNewNotifications: false,
          youAreSentADirectMessage: false,
          someoneAddsYouAsAsAConnection: true,
          uponNewOrder: false,
          newMembershipApproval: false,
          memberRegistration: true,
        },
        updatesFromKeenthemes: {
          newsAboutKeenthemesProductsAndFeatureUpdates: false,
          tipsOnGettingMoreOutOfKeen: false,
          thingsYouMissedSindeYouLastLoggedIntoKeen: true,
          newsAboutMetronicOnPartnerProductsAndOtherServices: true,
          tipsOnMetronicBusinessProducts: true,
        },
      },
      communication: {
        email: true,
        sms: true,
        phone: false,
      },
      address: {
        addressLine: 'L-12-20 Vertex, Cybersquare',
        city: 'San Francisco',
        state: 'California',
        postCode: '45000',
      },
      socialNetworks: {
        linkedIn: 'https://linkedin.com/admin',
        facebook: 'https://facebook.com/admin',
        twitter: 'https://twitter.com/admin',
        instagram: 'https://instagram.com/admin',
      },
    },
    {
      id: 2,
      username: 'kosgebAdmin',
      password: 'demo',
      email: 'kosgebadmin@ankabeta.com',
      authToken: 'auth-token-6829bba69dd3421d8762-991e9e806dbf',
      refreshToken: 'auth-token-f8e4c61a318e4d618b6c199ef96b9e55',
      roles: CompanyTypes.KOSGEB, // Manager
      pic: './assets/media/logos/kosgeb.png',
      fullname: 'Küçük ve Orta Ölçekli İşletmeleri Geliştirme ve Destekleme İdaresi Başkanlığı',
      firstname: 'KOSGEB',
      lastname: '',
      occupation: 'KOSGEB Müdürü',
      companyName: 'KOSGEB',
      country:'Türkiye',
      phone: '456669067891',
      language: 'en',
      timeZone: 'International Date Line West',
      userCompanies:[{
        company: { id: 6, name: 'KOSGEB',img : {url:'./assets/media/logos/kosgeb.png'}, type: CompanyTypes.KOSGEB},
        roles:[UserRoles.KosgebAdmin],
        occupation: 'Genel Müdür',
      }],
      communication: {
        email: true,
        sms: true,
        phone: false,
      },
      emailSettings: {
        emailNotification: true,
        sendCopyToPersonalEmail: false,
        activityRelatesEmail: {
          youHaveNewNotifications: false,
          youAreSentADirectMessage: false,
          someoneAddsYouAsAsAConnection: true,
          uponNewOrder: false,
          newMembershipApproval: false,
          memberRegistration: true,
        },
        updatesFromKeenthemes: {
          newsAboutKeenthemesProductsAndFeatureUpdates: false,
          tipsOnGettingMoreOutOfKeen: false,
          thingsYouMissedSindeYouLastLoggedIntoKeen: true,
          newsAboutMetronicOnPartnerProductsAndOtherServices: true,
          tipsOnMetronicBusinessProducts: true,
        },
      },
      address: {
        addressLine: 'T.C. Küçük ve Orta Ölçekli İşletmeleri Geliştirme ve Destekleme İdaresi Başkanlığı Hacı Bayram Mah. İstanbul Cad. No: 3206050',
        city: 'ANKARA',
        state: 'Türkiye',
        postCode: '85012',
      },
      socialNetworks: {
        linkedIn: 'https://linkedin.com/user',
        facebook: 'https://facebook.com/user',
        twitter: 'https://twitter.com/user',
        instagram: 'https://instagram.com/user',
      },
    },
    {
      id: 3,
      username: 'KOSGEB Kullanıcı',
      password: 'demo',
      email: 'kosgebkurumsal@ankabeta.com',
      authToken: 'auth-token-d2dff7b82f784de584b60964abbe45b9',
      refreshToken: 'auth-token-c999ccfe74aa40d0aa1a64c5e620c1a5',
      roles: CompanyTypes.KOSGEBUSER, // Guest
      pic: './assets/media/logos/kosgeb.png',
      fullname: 'Mehmet Yılmaz',
      firstname: 'Mehmet',
      lastname: 'Yılmaz',
      occupation: 'KOSGEB Kullanıcısı',
      country:'Türkiye',
      companyName: 'KOSGEB',
      phone: '456669067892',
      language: 'en',
      timeZone: 'International Date Line West',
      userCompanies:[{
        company: { id: 6, name: 'KOSGEB',img : {url:'./assets/media/logos/kosgeb.png'}, type: CompanyTypes.KOSGEB},
        roles:[UserRoles.KosgebUser],
        occupation: 'Genel Müdür',
      }],
      communication: {
        email: true,
        sms: true,
        phone: false,
      },
      emailSettings: {
        emailNotification: true,
        sendCopyToPersonalEmail: false,
        activityRelatesEmail: {
          youHaveNewNotifications: false,
          youAreSentADirectMessage: false,
          someoneAddsYouAsAsAConnection: true,
          uponNewOrder: false,
          newMembershipApproval: false,
          memberRegistration: true,
        },
        updatesFromKeenthemes: {
          newsAboutKeenthemesProductsAndFeatureUpdates: false,
          tipsOnGettingMoreOutOfKeen: false,
          thingsYouMissedSindeYouLastLoggedIntoKeen: true,
          newsAboutMetronicOnPartnerProductsAndOtherServices: true,
          tipsOnMetronicBusinessProducts: true,
        },
      },
      address: {
        addressLine: 'T.C. Küçük ve Orta Ölçekli İşletmeleri Geliştirme ve Destekleme İdaresi Başkanlığı Hacı Bayram Mah. İstanbul Cad. No: 3206050',
        city: 'ANKARA',
        state: 'Türkiye',
        postCode: '85012',
      },
      socialNetworks: {
        linkedIn: 'https://linkedin.com/guest',
        facebook: 'https://facebook.com/guest',
        twitter: 'https://twitter.com/guest',
        instagram: 'https://instagram.com/guest',
      },
    },
    {
      id: 4,
      username: 'BI Kullanıcı',
      password: 'demo',
      email: 'bi@ankabeta.com',
      authToken: 'auth-token-d2dff7b82f784de845b60964abbe45b9',
      refreshToken: 'auth-token-c999ccfe74aa60d0aa1a64c5e620c1a5',
      roles:  CompanyTypes.BI, // Guest
      pic: './assets/media/logos/isuzu.png',
      fullname: 'Ahmet Yıkılmaz',
      firstname: 'Ahmet',
      lastname: 'Yıkılmaz',
      occupation: 'CFO',
      country:'Türkiye',
      companyName: 'BI',
      phone: '456669067892',
      userCompanies:[
      {
        company: { id: 2, name: 'ISUZU',img : {url:'./assets/media/logos/isuzu.png'}, type: CompanyTypes.BI},
        roles:[1],
        occupation: 'Genel Müdür',
      }],
      language: 'en',
      timeZone: 'International Date Line West',
      communication: {
        email: true,
        sms: true,
        phone: false,
      },
      emailSettings: {
        emailNotification: true,
        sendCopyToPersonalEmail: false,
        activityRelatesEmail: {
          youHaveNewNotifications: false,
          youAreSentADirectMessage: false,
          someoneAddsYouAsAsAConnection: true,
          uponNewOrder: false,
          newMembershipApproval: false,
          memberRegistration: true,
        },
        updatesFromKeenthemes: {
          newsAboutKeenthemesProductsAndFeatureUpdates: false,
          tipsOnGettingMoreOutOfKeen: false,
          thingsYouMissedSindeYouLastLoggedIntoKeen: true,
          newsAboutMetronicOnPartnerProductsAndOtherServices: true,
          tipsOnMetronicBusinessProducts: true,
        },
      },
      address: {
        addressLine: 'Martı Cd. Balık Sk. No:23',
        city: 'Balıkesir',
        state: 'Türkiye',
        postCode: '85012',
      },
      socialNetworks: {
        linkedIn: 'https://linkedin.com/guest',
        facebook: 'https://facebook.com/guest',
        twitter: 'https://twitter.com/guest',
        instagram: 'https://instagram.com/guest',
      },
    },
    {
      id: 5,
      username: 'Kobi Kullanıcı',
      password: 'demo',
      email: 'kobi@ankabeta.com',
      authToken: 'auth-token-d2dff7b82f7843e584b60964abbe45b9',
      refreshToken: 'auth-token-c999ccfe74aa6540aa1a64c5e620c1a5',
      roles: CompanyTypes.KOBI, // Guest
      pic: './assets/media/logos/logo2.png',
      fullname: 'Ahmet Ulak',
      firstname: 'Ahmet',
      lastname: 'Ulak',
      occupation: 'CFO',
      country:'Türkiye',
      companyName: 'Keenthemes',
      phone: '456669067892',
      language: 'en',
      timeZone: 'International Date Line West',
      userCompanies:[
      {
        company: { id: 1, name: 'Ulak A.Ş',img : {url:'./assets/media/logos/logo2.png'}, type: CompanyTypes.KOBI},
        roles:[1],
        occupation: 'CEO',
      }],
      communication: {
        email: true,
        sms: true,
        phone: false,
      },
      emailSettings: {
        emailNotification: true,
        sendCopyToPersonalEmail: false,
        activityRelatesEmail: {
          youHaveNewNotifications: false,
          youAreSentADirectMessage: false,
          someoneAddsYouAsAsAConnection: true,
          uponNewOrder: false,
          newMembershipApproval: false,
          memberRegistration: true,
        },
        updatesFromKeenthemes: {
          newsAboutKeenthemesProductsAndFeatureUpdates: false,
          tipsOnGettingMoreOutOfKeen: false,
          thingsYouMissedSindeYouLastLoggedIntoKeen: true,
          newsAboutMetronicOnPartnerProductsAndOtherServices: true,
          tipsOnMetronicBusinessProducts: true,
        },
      },
      address: {
        addressLine: 'Tarihler Cd. Ulak Sk. No:23',
        city: 'İstanbul',
        state: 'Türkiye',
        postCode: '85012',
      },
      socialNetworks: {
        linkedIn: 'https://linkedin.com/guest',
        facebook: 'https://facebook.com/guest',
        twitter: 'https://twitter.com/guest',
        instagram: 'https://instagram.com/guest',
      },
    },
    {
      id: 6,
      username: 'Muadil Kurum Kullanıcı',
      password: 'demo',
      email: 'muadil@ankabeta.com',
      authToken: 'auth-token-d2dff7b82f78432584b60964abbe45b9',
      refreshToken: 'auth-token-c999ccfe74oa6540aa1a64c5e620c1a5',
      roles: CompanyTypes.Muadil, // Guest
      pic: './assets/media/logos/logo1.png',
      fullname: 'Mehmet Keskin',
      firstname: 'Mehmet',
      lastname: 'Keskin',
      occupation: 'Müdür',
      country:'Türkiye',
      companyName: 'Keenthemes',
      phone: '456669067892',
      language: 'en',
      timeZone: 'International Date Line West',
      userCompanies:[
      {
        company: { id: 1, name: 'Muadil Kurum',img : {url:'./assets/media/logos/logo1.png'}, type: CompanyTypes.Muadil},
        roles:[1],
        occupation: 'CEO',
      },],
      communication: {
        email: true,
        sms: true,
        phone: false,
      },
      emailSettings: {
        emailNotification: true,
        sendCopyToPersonalEmail: false,
        activityRelatesEmail: {
          youHaveNewNotifications: false,
          youAreSentADirectMessage: false,
          someoneAddsYouAsAsAConnection: true,
          uponNewOrder: false,
          newMembershipApproval: false,
          memberRegistration: true,
        },
        updatesFromKeenthemes: {
          newsAboutKeenthemesProductsAndFeatureUpdates: false,
          tipsOnGettingMoreOutOfKeen: false,
          thingsYouMissedSindeYouLastLoggedIntoKeen: true,
          newsAboutMetronicOnPartnerProductsAndOtherServices: true,
          tipsOnMetronicBusinessProducts: true,
        },
      },
      address: {
        addressLine: 'Tarihler Cd. Ulak Sk. No:23',
        city: 'İstanbul',
        state: 'Türkiye',
        postCode: '85012',
      },
      socialNetworks: {
        linkedIn: 'https://linkedin.com/guest',
        facebook: 'https://facebook.com/guest',
        twitter: 'https://twitter.com/guest',
        instagram: 'https://instagram.com/guest',
      },
    },
  ];

  public static tokens: any = [
    {
      id: 1,
      authToken: 'auth-token-' + Math.random(),
      refreshToken: 'auth-token-' + Math.random(),
    },
  ];
}
