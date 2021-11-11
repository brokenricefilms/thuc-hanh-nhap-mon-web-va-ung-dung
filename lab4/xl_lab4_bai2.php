<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
</head>

<body>
<table border="0" width="500">
            <tr>
            <td colspan="2" align="center"><b>THÔNG TIN SẢN PHẦM VỪA THÊM LÀ:</b></td></tr>



            <tr><td width="150">Mã sản phẩm</td>
           	<td><?php echo $_GET['nmProID']; ?></td>
            </tr>
            <tr><td>Tên sản phẩm</td>
           	<td><?php echo $_GET['nmProName']; ?></td>
            </tr>
            <tr><td>Hình ảnh</td>
           	<td><?php echo $_FILES['nmProImg']['name']; ?></td>
            </tr>

            <tr><td>Loại sản phẩm</td>
           	<td><?php echo $_GET['nmCat']; ?></td></tr>
            <tr><td>Hãng sản xuất</td>
           	<td><?php echo $_GET['nmMan']; ?></td></tr>
            <tr><td>Kích thước</td>
           	<td><?php echo $_GET['nmW']." x ".$_POST['nmH']." x ". $_POST['nmD']." mm" ; ?></td>
            </tr>
            <tr><td>Trọng lượng</td>
           	<td> <?php echo $_GET['nmW']; ?>g</td>
            </tr>
            <tr><td>Giá</td>
           	<td>
            <table width="100%" cellpadding="0" cellspacing="0">
            	<tr>
                	<td width="170"><?php echo $_GET['nmPrice']; ?></td>
                    <td>Màu: <?php echo $_GET['nmColor']; ?></td>
                </tr>
            </table>

            </td>
            </tr>
            <tr>
            	<td>Hệ điều hành</td>
                <td> <?php echo $_GET['nmOS']; ?>
              </td>
            </tr>
            <tr><td>Chức năng</td>
           	<td><?php
            foreach($_GET['nmFunction'] as $v)
				echo $v. "; "
			?></td>
            </tr>
            <tr>
            <tr><td>Mô tả chi tiết</td>
           	<td><?php echo $_GET['nmProDet']; ?></td>
            </tr>


            </table>
</body>
</html>
