export const showToast = (message, type = 'info') => {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span>${message}</span>
  `;
  container.appendChild(toast);

  // Trigger reflow
  void toast.offsetWidth;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3000);
};

export const createLoader = () => {
  return `<span class="loader"></span>`;
};

// Check auth state on page load
export const requireAuth = async (supabase, redirectUrl = '/login.html') => {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) {
    window.location.href = redirectUrl;
    return null;
  }
  return session;
};

export const requireAdmin = async (supabase) => {
  const session = await requireAuth(supabase, '/admin-login.html');
  if (session) {
    // strict check for admin role
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', session.user.id)
      .single();
      
    if (!profile || profile.role !== 'admin') {
      window.location.href = '/user/dashboard.html';
      return null;
    }
    return session;
  }
};
