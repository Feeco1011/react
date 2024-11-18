import React, { useState, useRef } from 'react';

const ArticleForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: '',
  });
  const [errors, setErrors] = useState({});
  const [imagePreview, setImagePreview] = useState(null);
  const [file, setFile] = useState(null);
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // 這裡使用 ref 控制 input 元素
  const fileInputRef = useRef(null);

  const validateField = (name, value) => {
    switch (name) {
      case 'title':
        if (!value.trim()) return '請輸入標題';
        if (value.length < 2) return '標題至少需要2個字';
        if (value.length > 100) return '標題不能超過100個字';
        return '';
      case 'content':
        if (!value.trim()) return '請輸入內容';
        if (value.length < 10) return '內容至少需要10個字';
        if (value.length > 5000) return '內容不能超過5000個字';
        return '';
      case 'category':
        if (!value) return '請選擇分類';
        return '';
      default:
        return '';
    }
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (submitAttempted) {
      const error = validateField(name, value);
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }
  };

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          image: '圖片大小不能超過 5MB',
        }));
        return;
      }

      const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (!validTypes.includes(selectedFile.type)) {
        setErrors((prev) => ({
          ...prev,
          image: '只支援 JPG, PNG, GIF 格式',
        }));
        return;
      }

      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);

      setErrors((prev) => ({
        ...prev,
        image: '',
      }));
    }
  };

  const handleRemoveImage = () => {
    // 清除檔案與預覽圖
    setFile(null);
    setImagePreview(null);
    // 重設檔案輸入框的值，這樣可以讓使用者重新選擇檔案
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitAttempted(true);
    setSuccessMessage('');
    setErrorMessage('');

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('content', formData.content);
      formDataToSend.append('category', formData.category);
      if (file) {
        formDataToSend.append('image', file);
      }

      const response = await fetch('http://localhost:3005/api/articles', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || '提交失敗');
      }

      setSuccessMessage('文章成功發布！');
      setFormData({
        title: '',
        content: '',
        category: '',
      });
      setImagePreview(null);
      setFile(null);
      setErrors({});
    } catch (error) {
      setErrorMessage(error.message || '提交失敗，請稍後再試');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      title: '',
      content: '',
      category: '',
    });
    setImagePreview(null);
    setFile(null);
    setErrors({});
    setSubmitAttempted(false);
    setSuccessMessage('');
    setErrorMessage('');
  };

  const errorStyle = {
    color: '#dc2626',
    fontSize: '0.875rem',
    marginTop: '0.25rem',
  };

  const successStyle = {
    color: '#16a34a',
    fontSize: '0.875rem',
    marginTop: '0.25rem',
  };

  const getInputStyle = (fieldName) => ({
    width: '100%',
    padding: '0.75rem',
    fontSize: '1rem',
    border: `2px solid ${errors[fieldName] ? '#dc2626' : '#e0e0e0'}`,
    borderRadius: '8px',
    outline: 'none',
    transition: 'all 0.3s ease',
  });

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#fff9f5',
        padding: '2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          width: '100%',
          maxWidth: '800px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            backgroundColor: '#ff8c42',
            color: 'white',
            padding: '1.5rem',
            textAlign: 'center',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
          }}
        >
          新增文章
        </div>

        {/* 顯示成功訊息 */}
        {successMessage && (
          <div
            style={{
              margin: '0 2rem 1rem',
              padding: '1rem',
              backgroundColor: '#e6ffea',
              color: '#16a34a',
              borderRadius: '8px',
            }}
          >
            {successMessage}
          </div>
        )}

        {/* 顯示錯誤訊息 */}
        {errorMessage && (
          <div
            style={{
              margin: '0 2rem 1rem',
              padding: '1rem',
              backgroundColor: '#fee2e2',
              color: '#dc2626',
              borderRadius: '8px',
            }}
          >
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ padding: '0 2rem 2rem' }}>
          {/* 標題輸入 */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#333',
                fontSize: '1.1rem',
                fontWeight: '500',
              }}
            >
              標題 *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="請輸入文章標題"
              style={getInputStyle('title')}
            />
            {errors.title && <div style={errorStyle}>{errors.title}</div>}
          </div>

          {/* 分類選擇 */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#333',
                fontSize: '1.1rem',
                fontWeight: '500',
              }}
            >
              分類 *
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              style={getInputStyle('category')}
            >
              <option value="">請選擇分類</option>
              <option value="history">歷史古蹟</option>
              <option value="relax">舒適休閒</option>
              <option value="natural">自然環境</option>
              <option value="art">人文藝術</option>
            </select>
            {errors.category && <div style={errorStyle}>{errors.category}</div>}
          </div>

          {/* 內容輸入 */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#333',
                fontSize: '1.1rem',
                fontWeight: '500',
              }}
            >
              內容 *
            </label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="請輸入文章內容"
              style={{
                ...getInputStyle('content'),
                minHeight: '200px',
                resize: 'vertical',
              }}
            />
            {errors.content && <div style={errorStyle}>{errors.content}</div>}
          </div>

          {/* 圖片上傳 */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#333',
                fontSize: '1.1rem',
                fontWeight: '500',
              }}
            >
              上傳圖片
            </label>
            <input
              ref={fileInputRef} // 這裡使用 ref
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={getInputStyle('image')}
            />
            {errors.image && <div style={errorStyle}>{errors.image}</div>}
            {imagePreview && (
              <div
                style={{
                  marginTop: '1rem',
                  position: 'relative',
                }}
              >
                <img
                  src={imagePreview}
                  alt="Preview"
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                  }}
                />
                <button
                  type="button"
                  onClick={handleRemoveImage} // 點擊按鈕移除圖片
                  style={{
                    position: 'absolute',
                    top: '0.5rem',
                    right: '0.5rem',
                    backgroundColor: '#ff4444',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '24px',
                    height: '24px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  ✕
                </button>
              </div>
            )}
          </div>

          {/* 按鈕區域 */}
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              marginTop: '2rem',
            }}
          >
            <button
              type="submit"
              disabled={loading} // 當正在加載時禁用按鈕
              style={{
                flex: 1,
                padding: '1rem',
                fontSize: '1rem',
                fontWeight: '500',
                color: 'white',
                backgroundColor: '#ff8c42',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              {loading ? '發布中...' : '發布文章'}
            </button>
            <button
              type="button"
              onClick={handleReset}
              style={{
                flex: 1,
                padding: '1rem',
                fontSize: '1rem',
                fontWeight: '500',
                color: '#666',
                backgroundColor: 'white',
                border: '2px solid #e0e0e0',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              清除內容
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ArticleForm;
