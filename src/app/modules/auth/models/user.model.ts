import { AuthModel } from './auth.model';
import { AddressModel } from './address.model';
import { SocialNetworksModel } from './social-networks.model';
import { CompanyTypes, UserCompany, UserRoles } from './user-company.model';

export class UserModel extends AuthModel {
  id?: number;
  username?: string;
  password?: string;
  fullname?: string;
  email?: string;
  pic?: string;
  roles?: CompanyTypes;
  occupation?: string;
  companyName?: string;
  phone?: string;
  address?: AddressModel;
  socialNetworks?: SocialNetworksModel;
  selectedCompany?:UserCompany | null;
  userCompanies?:UserCompany[];
  // personal information
  firstname?: string;
  lastname?: string;
  website?: string;
  // account information
  language?: string;
  timeZone?: string;
  communication?: {
    email?: boolean;
    sms?: boolean;
    phone?: boolean;
  };
  // email settings
  emailSettings?: {
    emailNotification?: boolean;
    sendCopyToPersonalEmail?: boolean;
    activityRelatesEmail?: {
      youHaveNewNotifications?: boolean;
      youAreSentADirectMessage?: boolean;
      someoneAddsYouAsAsAConnection?: boolean;
      uponNewOrder?: boolean;
      newMembershipApproval?: boolean;
      memberRegistration?: boolean;
    };
    updatesFromKeenthemes?: {
      newsAboutKeenthemesProductsAndFeatureUpdates?: boolean;
      tipsOnGettingMoreOutOfKeen?: boolean;
      thingsYouMissedSindeYouLastLoggedIntoKeen?: boolean;
      newsAboutMetronicOnPartnerProductsAndOtherServices?: boolean;
      tipsOnMetronicBusinessProducts?: boolean;
    };
  };

  // UserModel sınıfı içinde
loginSetUser(apiData: any) {
  this.id = 1;
  this.username = "1297801578";
  this.password = 'demoTestPassword12'; // Şifre verisi güvenlik nedeniyle temizlenmiş gibi görünüyor
  this.authToken = apiData.data.token
  this.refreshToken = "auth-token-f8c137a2c98743f48b643e71161d90aa";
  this.fullname = apiData.data.companies.name || ''; // Tam adınızın API yanıtının doğru alanına göre güncellenmesi gerekebilir
  this.email = apiData.data.name || 'emraoruc@gmail.com'; // E-posta verisinin API yanıtına göre güncellenmesi gerekebilir
  this.pic = apiData.data.name || './assets/media/avatars/blank.png'; // Varsayılan bir profil resmi belirtin
  this.roles = 2; // Eğer rol bilgisi API yanıtına göre farklı bir alanda ise ona göre güncelleyin
  this.occupation = apiData.data.occupation || '';
  this.companyName = apiData.data.companies.name || '';
  this.phone = apiData.data.phoneNumber || '';
  
  // Diğer özellikleri API yanıtına göre güncelleyin
  this.firstname = apiData.data.firstname || '';
  this.lastname = apiData.data.lastname || '';
  this.website = apiData.data.website || '';
  this.language = apiData.data.language || '';
  this.timeZone = apiData.data.timeZone || '';

 

  // E-posta ayarlarını API yanıtına göre güncelleyin
  this.emailSettings = {
    emailNotification: true, // API yanıtına göre ayarlayın
    sendCopyToPersonalEmail: true, // API yanıtına göre ayarlayın
    activityRelatesEmail: {
      youHaveNewNotifications: true, // API yanıtına göre ayarlayın
      // Diğer etkinlikle ilgili e-posta ayarlarını API yanıtına göre ekleyin
    },
    updatesFromKeenthemes: {
      newsAboutKeenthemesProductsAndFeatureUpdates: true, // API yanıtına göre ayarlayın
      // Diğer güncelleme e-postalarını API yanıtına göre ekleyin
    },
  };
}


  setUser(_user?: unknown) {
    const user = _user as UserModel;
    this.id = user.id;
    this.username = user.username || '';
    this.password = user.password || '';
    this.fullname = user.fullname || '';
    this.email = user.email || '';
    this.selectedCompany = user.selectedCompany!;
    this.pic = user.pic || './assets/media/avatars/blank.png';
    this.roles = user.roles!;
    this.occupation = user.occupation || '';
    this.companyName = user.companyName || '';
    this.phone = user.phone || '';
    this.address = user.address;
    this.socialNetworks = user.socialNetworks;
  }
}
