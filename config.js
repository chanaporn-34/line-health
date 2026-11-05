// ตั้งค่าหน้า LIFF — ศบส.34
window.APP_CONFIG = {
  GAS_URL: 'https://script.google.com/macros/s/AKfycbwLJLm86WdekV6SqRbevoQLMO2PgkARhqzvzbAos3wPDXbo8hTTv3CNaRBs1__WUa3Isg/exec',
  LIFF_REGISTER_ID: 'ใส่ทีหลัง', // LIFF ID ของหน้า register.html
  LIFF_VIEWER_ID: 'ใส่ทีหลัง',   // LIFF ID ของหน้า viewer.html
  CENTER_NAME: 'ศูนย์บริการสาธารณสุข 34',
};

/** เรียก API ของ Apps Script (ใช้ text/plain เพื่อเลี่ยง CORS preflight) */
window.callApi = async function (payload) {
  const res = await fetch(window.APP_CONFIG.GAS_URL, { method: 'POST', body: JSON.stringify(payload) });
  const data = await res.json();
  if (!data.ok) throw new Error(data.error || 'เกิดข้อผิดพลาด');
  return data;
};
