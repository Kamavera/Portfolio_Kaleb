import React from 'react';

const Box = ({ children, start, end, small }) => (
  <div style={{
    border: `2px solid ${start ? '#7ec8a0' : end ? '#9b8ec4' : '#334155'}`,
    borderRadius: 12,
    padding: small ? '12px 18px' : '18px 28px',
    textAlign: 'center',
    maxWidth: small ? 220 : 460,
    background: start ? '#0f2a1e' : end ? '#1a1530' : '#1e293b',
    margin: '6px 0',
  }}>
    {children}
  </div>
);

const Arrow = () => <div style={{ color: '#7ec8a0', fontSize: 28, textAlign: 'center', lineHeight: 1, margin: '-4px 0' }}>▼</div>;

const ArrowLabel = ({ text }) => (
  <div style={{ fontSize: 11, color: '#64748b', textAlign: 'center', margin: 0 }}>{text}</div>
);

const MergeArrow = () => <div style={{ color: '#6bafb8', fontSize: 26, textAlign: 'center', margin: '8px 0' }}>▼</div>;

const Branch = ({ label, steps }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
    <div style={{ fontSize: 12, color: '#d4a96a', fontWeight: 700, marginBottom: 6, textTransform: 'uppercase', letterSpacing: 1 }}>{label}</div>
    {steps.map((s, i) => (
      <React.Fragment key={i}>
        <Box small={true}>
          <h3 style={{ fontSize: 13, marginBottom: 2, color: '#f8fafc' }}>{s.title}</h3>
          <p style={{ fontSize: 11, color: '#94a3b8', margin: 0 }}>{s.desc}</p>
        </Box>
        {i < steps.length - 1 && <Arrow />}
      </React.Fragment>
    ))}
  </div>
);

export function FlowChart() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 24, marginBottom: 8 }}>
      <h5 style={{ fontSize: 16, fontWeight: 700, color: '#f8fafc', marginBottom: 4, alignSelf: 'flex-start' }}>
        Diagrama de Flujo
      </h5>
      <p style={{ fontSize: 13, color: '#64748b', marginBottom: 24, alignSelf: 'flex-start' }}>
        NC → Acción Correctiva → Plan de Acción → Cierre
      </p>

      <Box start={true}>
        <h3 style={{ fontSize: 16, marginBottom: 4, color: '#f8fafc' }}>🔍 Se detecta una No Conformidad</h3>
        <p style={{ fontSize: 13, color: '#94a3b8', margin: 0 }}>Auditoría interna, inspección o reporte</p>
      </Box>
      <Arrow />

      <Box>
        <h3 style={{ fontSize: 16, marginBottom: 4, color: '#f8fafc' }}>📝 Registrar NC</h3>
        <p style={{ fontSize: 13, color: '#94a3b8', margin: 0 }}>Módulo NC · Tipo, severidad, causas, asignado</p>
      </Box>
      <Arrow />

      <Box>
        <h3 style={{ fontSize: 16, marginBottom: 4, color: '#f8fafc' }}>🔐 Verificar acceso (Azure AD)</h3>
        <p style={{ fontSize: 13, color: '#94a3b8', margin: 0 }}>¿Usuario en CIRACET NC Users o CAPA Admins?</p>
      </Box>
      <Arrow />
      <ArrowLabel text="✓ Acceso concedido" />

      <Box>
        <h3 style={{ fontSize: 16, marginBottom: 4, color: '#f8fafc' }}>📊 Dashboard NC</h3>
        <p style={{ fontSize: 13, color: '#94a3b8', margin: 0 }}>Listado con filtros · Badges de estatus · KPIs</p>
      </Box>
      <Arrow />
      <ArrowLabel text="Se requiere Acción Correctiva" />

      <Box>
        <h3 style={{ fontSize: 16, marginBottom: 4, color: '#f8fafc' }}>🔗 Crear Acción Correctiva</h3>
        <p style={{ fontSize: 13, color: '#94a3b8', margin: 0 }}>Módulo CA · Vinculada a NC · Plan de 5 pasos</p>
      </Box>
      <Arrow />

      <div style={{ display: 'flex', gap: 40, margin: '12px 0' }}>
        <Branch
          label="Responsable"
          steps={[
            { title: '📋 Mis Acciones', desc: 'Ver pasos asignados' },
            { title: '✏️ Actualizar', desc: '[UPDATE - fecha - usuario]' },
            { title: '✅ Completar', desc: '[COMPLETADO - fecha]' },
          ]}
        />
        <Branch
          label="QA Auditor"
          steps={[
            { title: '🔍 Inspeccionar', desc: 'Revisar plan y notas' },
            { title: '📄 Generar PDF', desc: 'Reporte de inspección' },
          ]}
        />
        <Branch
          label="Admin"
          steps={[
            { title: '🏁 Cierre de CA', desc: 'Validar pasos completados' },
            { title: '⚠️ ¿Pasos pendientes?', desc: 'Diálogo cierre forzoso' },
          ]}
        />
      </div>

      <MergeArrow />

      <Box>
        <h3 style={{ fontSize: 16, marginBottom: 4, color: '#f8fafc' }}>📜 Historial de Auditoría</h3>
        <p style={{ fontSize: 13, color: '#94a3b8', margin: 0 }}>Lista "Historial" SharePoint · Quién, qué, cuándo</p>
      </Box>
      <Arrow />

      <Box end={true}>
        <h3 style={{ fontSize: 16, marginBottom: 4, color: '#f8fafc' }}>✅ CA Cerrada · Cumplimiento ISO 9001</h3>
        <p style={{ fontSize: 13, color: '#94a3b8', margin: 0 }}>Trazabilidad completa: NC → CA → Plan → Cierre · PDF generado</p>
      </Box>
    </div>
  );
}
