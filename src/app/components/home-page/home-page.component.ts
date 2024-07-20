import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface OptionModels {
  key: string;
  value: string;
}

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {
  motoPrice: string = '69.000.000';
  motoColor: string = 'xám đen';
  engineParameters: OptionModels[] = [];
  chassisParameters: OptionModels[] = [];
  sizeParameters: OptionModels[] = [];
  warrantyParameters: OptionModels[] = [];
  exhaustSystemParameters: OptionModels[] = [];
  ngOnInit(): void {
    this.setValueEngineParameters();
    this.getChassisParams();
    this.getSizeParams();
    this.getWarrantyParameters();
    this.getExhaustSystemParameters();
  }

  setValueEngineParameters() {
    this.engineParameters = [
      {
        key: 'LOẠI',
        value: '4 thì, 4 van, SOHC, làm mát bằng dung dịch',
      },
      {
        key: 'BỐ TRÍ XI LANH',
        value: 'Xy lanh đơn',
      },
      {
        key: 'DUNG TÍCH XY LANH (CC)',
        value: '155cc',
      },
      {
        key: 'ĐƯỜNG KÍNH VÀ HÀNH TRÌNH PISTON',
        value: '58 x 58,7 mm',
      },
      {
        key: 'TỶ SỐ NÉN',
        value: '11,6 : 1',
      },
      {
        key: 'CÔNG SUẤT TỐI ĐA',
        value: '14,2 kW (19,3 PS)/10.000 vòng/phút',
      },
      {
        key: 'MÔ MEN XOẮN CỰC ĐẠI',
        value: '14,7 N.m (1,5kgf.m)/8.500 vòng/phút',
      },
      {
        key: 'HỆ THỐNG KHỞI ĐỘNG',
        value: 'Điện',
      },
      {
        key: 'DUNG TÍCH DẦU MÁY',
        value: '1,05 lít',
      },
      {
        key: 'DUNG TÍCH BÌNH XĂNG',
        value: '10 lít',
      },
      {
        key: 'MỨC TIÊU THỤ NHIÊN LIỆU (L/100KM)',
        value: '2,09',
      },
      {
        key: 'BỘ CHẾ HÒA KHÍ',
        value: 'Hệ thống phun xăng điện tử',
      },
      {
        key: 'HỆ THỐNG ĐÁNH LỬA',
        value: 'TCI',
      },
      {
        key: 'TỶ SỐ TRUYỀN SƠ CẤP VÀ THỨ CẤP',
        value: '3,042 - 3,714',
      },
      {
        key: 'HỆ THỐNG LY HỢP',
        value: 'Ly hợp ướt, đa đĩa',
      },
      {
        key: 'KIỂU HỆ THỐNG TRUYỀN LỰC',
        value: 'Bánh răng ăn khớp, 6 số',
      },
    ];
  }

  getChassisParams() {
    this.chassisParameters = [
      {
        key: 'LOẠI KHUNG',
        value: 'Thép biên dạng kim cương',
      },
      {
        key: 'HỆ THỐNG GIẢM XÓC TRƯỚC',
        value: 'Hành trình ngược (Upside down)',
      },
      {
        key: 'HÀNH TRÌNH PHUỘC TRƯỚC',
        value: '130 mm',
      },
      {
        key: 'ĐỘ LỆCH PHƯƠNG TRỤC LÁI',
        value: '25,7° /89mm',
      },
      {
        key: 'HỆ THỐNG GIẢM XÓC SAU',
        value: 'Tay đòn',
      },
      {
        key: 'PHANH TRƯỚC',
        value: 'Đĩa đơn thuỷ lực',
      },
      {
        key: 'PHANH SAU',
        value: 'Đĩa đơn thuỷ lực',
      },
      {
        key: 'LỐP TRƯỚC',
        value: '110/70 - 17 M/C 54S (lốp không săm)',
      },
      {
        key: 'LỐP SAU',
        value: '140/70 - 17 M/C 66S (lốp không săm)',
      },
      {
        key: 'ĐÈN TRƯỚC',
        value: 'LED',
      },
      {
        key: 'ĐÈN SAU',
        value: 'LED',
      },
    ];
  }

  getSizeParams() {
    this.sizeParameters = [
      {
        key: 'KÍCH THƯỚC (DÀI X RỘNG X CAO)',
        value: '1965 mm x 800 mm x 1065 mm',
      },
      {
        key: 'ĐỘ CAO YÊN XE',
        value: '810 mm',
      },
      {
        key: 'ĐỘ CAO GẦM XE',
        value: '155 mm',
      },
      {
        key: 'KHOẢNG CÁCH GIỮA 2 TRỤC BÁNH XE',
        value: '1335 mm',
      },
      {
        key: 'TRỌNG LƯỢNG ƯỚT',
        value: '133 kg',
      },
    ];
  }

  getWarrantyParameters() {
    this.warrantyParameters = [
      {
        key: 'THỜI GIAN BẢO HÀNH',
        value: '3 năm hoặc 30.000 km (tuỳ theo điều kiện nào đến trước)',
      },
    ];
  }

  getExhaustSystemParameters() {
    this.exhaustSystemParameters = [
      {
        key: '2 PHIÊN BẢN',
        value:
          'Ống xả tiêu chuẩn (phiên bản thường) và ống xả thương hiệu Yoshimura (phiên bản đặc biệt)',
      },
    ];
  }
}
