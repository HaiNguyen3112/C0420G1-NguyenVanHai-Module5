import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  playlist = [
    {id: 'yF1rUhDRzG0', song: 'ĐÁNH MẤT ... EM (MV OFFICIAL) - QUANG ĐĂNG TRẦN X ProD. DUY NGUYỆN'},
    {id: 'AoN__ZtGenc', song: 'Ngây Thơ - Tăng Duy Tân x Phong Max * Phong Max remix *'},
    {id: 'GtwpjJSKZ-o', song: 'GÁC LẠI ÂU LO - DA LAB X MIU LÊ ( ZEAPLEE REMIX ) | NHỚ ĐEO TAI NGHE'},
    {id: 'P-NtZ1OaILY', song: 'Lynk Lee - Buồn Thì Cứ Khóc Đi (JuongB Remix MV)'},
    {id: 'WpYeekQkAdc', song: 'The Black Eyed Peas - Where Is The Love?'}
  ];
  constructor() { }
  // tslint:disable-next-line:typedef
  find(id: string) {
    return this.playlist.find(item => item.id === id);
  }
}
