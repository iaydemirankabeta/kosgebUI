interface MessageModel {
  user: number;
  type: 'in' | 'out';
  text: string;
  time: string;
  template?: boolean;
}

const defaultMessages: Array<MessageModel> = [
  {
    user: 4,
    type: 'in',
    text: 'Şirketimizi arkadaşlarınıza ve ailenize tavsiye etme olasılığınız nedir?',
    time: '2 dakika önce',
  },
  {
    user: 2,
    type: 'out',
    text: 'Merhaba, size GitHub üzerinde bir depoya abone olduğunuzu bildirmek istiyoruz.',
    time: '5 dakika önce',
  },
  {
    user: 4,
    type: 'in',
    text: 'Tamam, Anladım!',
    time: '1 saat önce',
  },
  {
    user: 2,
    type: 'out',
    text: 'Tüm sorunlar ve çekme istekleri için bildirimler alacaksınız!',
    time: '2 saat önce',
  },
  {
    user: 4,
    type: 'in',
    text: 'Bu depoyu hemen izlemeyi bırakabilirsiniz.',
    time: '3 saat önce',
  },
  {
    user: 2,
    type: 'out',
    text: 'Bu satış sırasında en çok satın alınan İşletme kursları!',
    time: '4 saat önce',
  },
  {
    user: 4,
    type: 'in',
    text: 'Son çeyrek başarıları ve hedeflerini kutlamak için Şirket Barbeküsü düzenliyoruz. Yiyecek ve içecekler sağlanacak.',
    time: '5 saat önce',
  },
  {
    template: true,
    user: 2,
    type: 'out',
    text: '',
    time: 'şimdi',
  },
  {
    template: true,
    user: 4,
    type: 'in',
    text: 'Tatil sezonundan hemen önce size bir sonraki Büyük Fırsatımızı sunuyoruz.',
    time: 'şimdi',
  },
];

interface UserInfoModel {
  initials?: {
    label: string;
    state: 'warning' | 'danger' | 'primary' | 'success' | 'info';
  };
  name: string;
  avatar?: string;
  email: string;
  position: string;
  online: boolean;
  company:string;
}

const defaultUserInfos: Array<UserInfoModel> = [
  {
    name: 'Selim',
    avatar: 'avatars/300-6.jpg',
    email: 'e.smith@kpmg.com.au',
    position: 'Sanat Direktörü',
    online: false,
    company: 'KPMG',
  },
  {
    name: 'Melody Macy',
    initials: { label: 'M', state: 'danger' },
    email: 'melody@altbox.com',
    position: 'Pazarlama Analisti',
    online: true,
    company: 'Altbox',
  },
  {
    name: 'Max Smith',
    avatar: 'avatars/300-1.jpg',
    email: 'max@kt.com',
    position: 'Yazılım Mühendisi',
    online: false,
    company: 'KT',
  },
  {
    name: 'Sean Bean',
    avatar: 'avatars/300-5.jpg',
    email: 'sean@dellito.com',
    position: 'Web Geliştirici',
    online: false,
    company: 'Dellito',
  },
  {
    name: 'Burak Çetin',
    avatar: 'avatars/300-25.jpg',
    email: 'brian@exchange.com',
    position: 'UI/UX Tasarımcısı',
    online: false,
    company: 'Exchange',
  },
  {
    name: 'Mikaela Collins',
    initials: { label: 'M', state: 'warning' },
    email: 'mikaela@pexcom.com',
    position: 'Pazarlama Başkanı',
    online: true,
    company: 'Pexcom',
  },
  {
    name: 'Francis Mitcham',
    avatar: 'avatars/300-9.jpg',
    email: 'f.mitcham@kpmg.com.au',
    position: 'Yazılım Mimarısı',
    online: false,
    company: 'KPMG',
  },
  {
    name: 'Olivia Wild',
    initials: { label: 'O', state: 'danger' },
    email: 'olivia@corpmail.com',
    position: 'Sistem Yöneticisi',
    online: true,
    company: 'CorpMail',
  },
  {
    name: 'Neil Owen',
    initials: { label: 'N', state: 'primary' },
    email: 'owen.neil@gmail.com',
    position: 'Hesap Yöneticisi',
    online: true,
    company: 'Gmail',
  },
  {
    name: 'Dan Wilson',
    avatar: 'avatars/300-23.jpg',
    email: 'dam@consilting.com',
    position: 'Web Tasarımcısı',
    online: false,
    company: 'Consilting',
  },
  {
    name: 'Emma Bold',
    initials: { label: 'E', state: 'danger' },
    email: 'emma@intenso.com',
    position: 'Kurumsal Finans',
    online: true,
    company: 'Intenso',
  },
  {
    name: 'Ana Crown',
    avatar: 'avatars/300-12.jpg',
    email: 'ana.cf@limtel.com',
    position: 'Müşteri İlişkileri',
    online: false,
    company: 'Limtel',
  },
  {
    name: 'Robert Doe',
    initials: { label: 'A', state: 'info' },
    email: 'robert@benko.com',
    position: 'Pazarlama Yöneticisi',
    online: true,
    company: 'Benko',
  },
  {
    name: 'John Miller',
    avatar: 'avatars/300-13.jpg',
    email: 'miller@mapple.com',
    position: 'Proje Yöneticisi',
    online: false,
    company: 'Mapple',
  },
  {
    name: 'Lucy Kunic',
    initials: { label: 'L', state: 'success' },
    email: 'lucy.m@fentech.com',
    position: 'SEO Uzmanı',
    online: true,
    company: 'Fentech',
  },
  {
    name: 'Ethan Wilder',
    avatar: 'avatars/300-21.jpg',
    email: 'ethan@loop.com.au',
    position: 'Muhasebeci',
    online: true,
    company: 'Loop',
  },
];


const messageFromClient: MessageModel = {
  user: 4,
  type: 'in',
  text: 'Thank you for your awesome support!',
  time: 'Şimdi',
};

export {
  MessageModel,
  defaultMessages,
  UserInfoModel,
  defaultUserInfos,
  messageFromClient,
};
