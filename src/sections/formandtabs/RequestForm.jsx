import React, {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Unstable_Grid2';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {useTheme} from "@mui/material/styles";
import Box from "@mui/material/Box";
import {toast} from 'react-toastify';
import {Iconify} from "../../components/iconify/index";
import StateSelector from "../../components/state-selector/StateSelector";
import { useTranslate } from 'src/locales';

export function RequestForm() {
  const initialFormData = {
    organizationType: '',
    fullTitle: '',
    shortTitle: '',
    activityType: '',
    fundingMethod: '',
    memberingMethod: '',
    reportingMethod: '',
    trackingCode: '',
    representer: '',
    licenseValidityDate: null,
    licenseIssuanceDate: null,
    establishmentDate: null,
    nationalId: '',
    registrationNumber: '',
    economicCode: '',
    registrationDate: null,
    description: '',
    isActive: false
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const currentUrl = window.location.href;
  const theme = useTheme();
  const translate = useTranslate();

  const resetFormData = () => {
    setFormData(initialFormData);
    setErrors({});
  };

  useEffect(() => {
    const savedFormData = localStorage.getItem("formData");

    if (savedFormData && !currentUrl.includes("buy")) {
      const parsedData = JSON.parse(savedFormData);

      setFormData({
        ...parsedData,
        licenseValidityDate: parsedData.licenseValidityDate ? new Date(parsedData.licenseValidityDate) : null,
        licenseIssuanceDate: parsedData.licenseIssuanceDate ? new Date(parsedData.licenseIssuanceDate) : null,
        establishmentDate: parsedData.establishmentDate ? new Date(parsedData.establishmentDate) : null,
        registrationDate: parsedData.registrationDate ? new Date(parsedData.registrationDate) : null,
      });
    } else {
      resetFormData();
    }
  }, [currentUrl]);

  const handleChange = (e) => {
    const {name, value, type, checked} = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const handleDateChange = (name, date) => {
    setFormData({
      ...formData,
      [name]: date,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.organizationType) newErrors.organizationType = 'این فیلد الزامی است';
    if (!formData.fullTitle) newErrors.fullTitle = 'این فیلد الزامی است';
    if (!formData.trackingCode) newErrors.trackingCode = 'این فیلد الزامی است';
    if (!formData.nationalId) newErrors.nationalId = 'این فیلد الزامی است';
    if (!formData.registrationNumber) newErrors.registrationNumber = 'این فیلد الزامی است';
    if (!formData.economicCode) newErrors.economicCode = 'این فیلد الزامی است';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("لطفا فیلدهای الزامی را پر کنید", {
        position: 'top-right',
        style: {
          textAlign: 'right',
          fontFamily: 'Yekan'
        }
      });
      return;
    }

    console.log(formData);

    try {
      localStorage.setItem("formData", JSON.stringify(formData));
      toast.success("تغییرات ذخیره شد", {
        position: 'top-right',
        style: {
          textAlign: 'right',
          fontFamily: 'Yekan'
        }
      });
      resetFormData();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Box sx={{mb: 2}}>
        <AppBar position='static'>
          <Toolbar variant='dense' sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            border: `1px solid ${theme.palette.background.neutral}`,
            py: 1,
            borderRadius: '1rem'
          }}>
            <Button
              onClick={handleSubmit}
              variant="contained"
              sx={{ gap: 1 }}
              size="medium"
              startIcon={<Iconify icon="material-symbols:save-rounded"/>}
            >
              {translate.t('common.save')}
            </Button>
            <StateSelector/>
          </Toolbar>
        </AppBar>
      </Box>
      <form onSubmit={handleSubmit}>
        <Stack spacing={{xs: 3, md: 5}} sx={{mx: 'auto', maxWidth: 'xl'}}>
          <Card>
            <CardHeader title={translate.t('common.mainInformation')}/>
            <Stack spacing={3} sx={{p: 3}}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                  <FormControl fullWidth variant="outlined" error={!!errors.organizationType}>
                    <InputLabel id="organization-type-label">
                      نوع درخواست 
                      <span style={{color: 'red'}}> *</span>
                    </InputLabel>
                    <Select
                      required
                      labelId="organization-type-label"
                      label="نوع درخواست"
                      name="organizationType"
                      value={formData.organizationType}
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>هیچکدام</em>
                      </MenuItem>
                      <MenuItem value="national">1. ورد به انبار</MenuItem>
                      <MenuItem value="provincial">2. خروج از انبار</MenuItem>
                    </Select>
                    {errors.organizationType && <span style={{color: 'red', fontSize: '0.75rem'}}>{errors.organizationType}</span>}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    fullWidth
                    label="عنوان کامل کالا"
                    name="fullTitle"
                    variant="outlined"
                    value={formData.fullTitle}
                    onChange={handleChange}
                    error={!!errors.fullTitle}
                    InputLabelProps={{style: {display: 'flex', alignItems: 'center'}}}
                    InputProps={{
                      endAdornment: <span style={{color: 'red'}}> *</span>,
                    }}
                    helperText={errors.fullTitle && <span style={{color: 'red', fontSize: '0.75rem'}}>{errors.fullTitle}</span>}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    fullWidth
                    label="نام اختصاری کالا"
                    name="shortTitle"
                    variant="outlined"
                    value={formData.shortTitle}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel id="activity-type-label"> محل مصرف</InputLabel>
                    <Select
                      labelId="activity-type-label"
                      label="محل مصرف"
                      name="activityType"
                      value={formData.activityType}
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>هیچکدام</em>
                      </MenuItem>
                      <MenuItem value="social">1. ساختمان مرکزی</MenuItem>
                      <MenuItem value="software">2. ساختمان میرداماد</MenuItem>
                      <MenuItem value="software2">3. ساختمان کارخانه</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel id="funding-method-label">نحوه تامین مالی</InputLabel>
                    <Select
                      labelId="funding-method-label"
                      label="نحوه تامین مالی"
                      name="fundingMethod"
                      value={formData.fundingMethod}
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>هیچکدام</em>
                      </MenuItem>
                      <MenuItem value="centralized">1. نقدی</MenuItem>
                      <MenuItem value="centralized2">2. تنخواه</MenuItem>
                      <MenuItem value="centralized3">3. چک بانکی</MenuItem>
                      <MenuItem value="centralized4">4. اعتباری</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel id="membering-method-label">مرکز خرید</InputLabel>
                    <Select
                      labelId="membering-method-label"
                      label="مرکز خرید"
                      name="memberingMethod"
                      value={formData.memberingMethod}
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>هیچکدام</em>
                      </MenuItem>
                      <MenuItem value="provincial">1. انبار مرکز (تهرانی)</MenuItem>
                      <MenuItem value="provincial2">2. انبار استانی (یزد)</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel id="reporting-method-label">نام تحویل گیرنده</InputLabel>
                    <Select
                      labelId="reporting-method-label"
                      label="نام تحویل گیرنده"
                      name="reportingMethod"
                      value={formData.reportingMethod}
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>هیچکدام</em>
                      </MenuItem>
                      <MenuItem value="provincial">1. علی امینی</MenuItem>
                      <MenuItem value="provincial2">2. رضا کولیوند</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    fullWidth
                    label="شماره فاکتور"
                    name="trackingCode"
                    variant="outlined"
                    value={formData.trackingCode}
                    onChange={handleChange}
                    error={!!errors.trackingCode}
                    InputLabelProps={{style: {display: 'flex', alignItems: 'center'}}}
                    InputProps={{
                      endAdornment: <span style={{color: 'red'}}> *</span>,
                    }}
                    helperText={errors.trackingCode && <span style={{color: 'red', fontSize: '0.75rem'}}>{errors.trackingCode}</span>}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel id="representer-label">کاربر ثبت کننده</InputLabel>
                    <Select
                      labelId="representer-label"
                      label="کاربر ثبت کننده"
                      name="representer"
                      value={formData.representer}
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>هیچکدام</em>
                      </MenuItem>
                      <MenuItem value="userInsert1">1. رضا جوادی</MenuItem>
                      <MenuItem value="userInsert2">2. امیر محمد طهرانی</MenuItem>
                      <MenuItem value="userInsert3">3. جواد زندی</MenuItem>
                      <MenuItem value="userInsert4">4. سامان اکبری</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Stack>
          </Card>

          <Card>
            <CardHeader title="اطلاعات تکمیلی"/>
            <Stack spacing={3} sx={{p: 3}}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                  <DatePicker
                    label="تاریخ اعتبار فاکتور"
                    value={formData.licenseValidityDate}
                    onChange={(date) => handleDateChange('licenseValidityDate', date)}
                    renderInput={(params) => <TextField fullWidth variant="outlined" {...params} />}
                    sx={{width: '100%'}}
                    name="licenseValidityDate"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <DatePicker
                    label="تاریخ صدور فاکتور"
                    value={formData.licenseIssuanceDate}
                    onChange={(date) => handleDateChange('licenseIssuanceDate', date)}
                    renderInput={(params) => <TextField fullWidth variant="outlined" {...params} />}
                    sx={{width: '100%'}}
                    name="licenseIssuanceDate"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <DatePicker
                    label="تاریخ ثبت"
                    value={formData.registrationDate}
                    onChange={(date) => handleDateChange('registrationDate', date)}
                    renderInput={(params) => <TextField fullWidth variant="outlined" {...params} />}
                    sx={{width: '100%'}}
                    name="registrationDate"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    fullWidth
                    label="شناسه کالا"
                    name="nationalId"
                    variant="outlined"
                    value={formData.nationalId}
                    onChange={handleChange}
                    error={!!errors.nationalId}
                    InputLabelProps={{style: {display: 'flex', alignItems: 'center'}}}
                    InputProps={{
                      endAdornment: <span style={{color: 'red'}}> *</span>,
                    }}
                    helperText={errors.nationalId && <span style={{color: 'red', fontSize: '0.75rem'}}>{errors.nationalId}</span>}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    fullWidth
                    label="شماره ثبت انبار"
                    name="registrationNumber"
                    variant="outlined"
                    value={formData.registrationNumber}
                    onChange={handleChange}
                    error={!!errors.registrationNumber}
                    InputLabelProps={{style: {display: 'flex', alignItems: 'center'}}}
                    InputProps={{
                      endAdornment: <span style={{color: 'red'}}> *</span>,
                    }}
                    helperText={errors.registrationNumber &&
                      <span style={{color: 'red', fontSize: '0.75rem'}}>{errors.registrationNumber}</span>}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    fullWidth
                    label=" کد اقتصادی کالا"
                    name="economicCode"
                    variant="outlined"
                    value={formData.economicCode}
                    onChange={handleChange}
                    error={!!errors.economicCode}
                    InputLabelProps={{style: {display: 'flex', alignItems: 'center'}}}
                    InputProps={{
                      endAdornment: <span style={{color: 'red'}}> *</span>,
                    }}
                    helperText={errors.economicCode && <span style={{color: 'red', fontSize: '0.75rem'}}>{errors.economicCode}</span>}
                  />
                </Grid>
                
              </Grid>
            </Stack>
          </Card>

          <Card>
            <CardHeader title="توضیحات"/>
            <Stack spacing={3} sx={{p: 3}}>
              <Grid container spacing={3}>
                <Grid item xs={8} sm={8} md={8}>
                  <TextField
                    label="توضیحات"
                    fullWidth
                    name="description"
                    variant="outlined"
                    multiline
                    rows={4}
                    value={formData.description}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={4} sm={4} md={4}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.isActive}
                        onChange={handleChange}
                        name="isActive"
                        color="primary"
                      />
                    }
                    label="فعال"
                  />
                </Grid>
              </Grid>
            </Stack>
          </Card>
        </Stack>
      </form>
    </>
  );
}
