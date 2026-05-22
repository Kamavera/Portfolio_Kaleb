import React from 'react';

const ganttStartDate = '2026-02-12';
const ganttEndDate = '2026-05-22';
const ganttTodayDate = '2026-05-22';

const phases = [
  // FASE 1: Datos
  { title: 'Creación de listas base NC y AC', phase: 'Datos', start: '2026-02-12', end: '2026-02-14', status: 'done' },
  { title: 'Definición de columnas, estados y lookups', phase: 'Datos', start: '2026-02-14', end: '2026-02-18', status: 'done' },

  // FASE 2: NC
  { title: 'Formulario y flujo de No Conformidades', phase: 'NC', start: '2026-02-19', end: '2026-02-24', status: 'done' },
  { title: 'Dashboard NC, filtros y KPIs', phase: 'NC', start: '2026-02-22', end: '2026-02-26', status: 'done' },

  // FASE 3: CA
  { title: 'Formulario y seguimiento de Acciones Correctivas', phase: 'CA', start: '2026-02-25', end: '2026-03-03', status: 'done' },
  { title: 'Dashboard CA, historial y adjuntos', phase: 'CA', start: '2026-03-03', end: '2026-03-08', status: 'done' },

  // FASE 4: Integración
  { title: 'Ajustes SharePoint, OData y documentación base', phase: 'Integración', start: '2026-03-09', end: '2026-03-14', status: 'done' },

  // FASE 5: Seguridad
  { title: 'Portal de acceso, auth y roles (Azure AD)', phase: 'Seguridad', start: '2026-03-14', end: '2026-03-22', status: 'done' },

  // FASE 6: Cierre y Plan de Acción (NUEVO)
  { title: 'Sistema de Plan de Acción (5 pasos)', phase: 'PlanAcción', start: '2026-03-20', end: '2026-04-02', status: 'done' },
  { title: 'ActionPlanUpdatePanel + marcadores [COMPLETADO]', phase: 'PlanAcción', start: '2026-03-28', end: '2026-04-08', status: 'done' },
  { title: 'CaCierreTab: validación y cierre forzoso', phase: 'Cierre', start: '2026-04-05', end: '2026-04-18', status: 'done' },
  { title: 'CaMyActionsTab: vista de pasos asignados', phase: 'Cierre', start: '2026-04-10', end: '2026-04-22', status: 'done' },

  // FASE 7: Documentación (NUEVO)
  { title: 'Corrección de bugs pre-presentación', phase: 'Docs', start: '2026-05-15', end: '2026-05-19', status: 'done' },
  { title: 'Flow Chart + Gantt Chart para portafolio', phase: 'Docs', start: '2026-05-17', end: '2026-05-20', status: 'done' },
  { title: 'Demo script NC→CA→Plan→Cierre (datos prueba)', phase: 'Docs', start: '2026-05-18', end: '2026-05-21', status: 'done' },
  { title: 'Manual de Usuario + Portafolio profesional', phase: 'Docs', start: '2026-05-19', end: '2026-05-22', status: 'done' },
];

const segments = [
  '12-16 Feb', '17-23 Feb', '24-2 Mar', '3-9 Mar', '10-16 Mar', '17-23 Mar', '24-30 Mar',
  '31-6 Abr', '7-13 Abr', '14-20 Abr', '21-27 Abr', '28-4 May', '5-11 May', '12-18 May', '19-22 May'
];

const phaseColors = {
  Datos: '#7ec8a0',
  NC: '#6bafb8',
  CA: '#d4a96a',
  Integración: '#9b8ec4',
  Seguridad: '#e8928a',
  PlanAcción: '#e6c48a',
  Cierre: '#b5a8d8',
  Docs: '#84c4ce',
};

function parseDate(d) { return new Date(d + 'T00:00:00'); }
function dayDiff(a, b) { return Math.round((parseDate(b).getTime() - parseDate(a).getTime()) / 86400000); }
function days(a, b) { return dayDiff(a, b) + 1; }
function pct(a, b) { return Math.max(0, (dayDiff(a, b) / days(ganttStartDate, ganttEndDate)) * 100); }
function wpct(a, b) { return Math.max(0.5, (days(a, b) / days(ganttStartDate, ganttEndDate)) * 100); }
function fmt(d) { return new Intl.DateTimeFormat('es-PR', { day: '2-digit', month: 'short' }).format(parseDate(d)); }

export function GanttChart() {
  const totalDays = days(ganttStartDate, ganttEndDate);

  return (
    <div style={{ marginTop: 24, marginBottom: 8, color: '#e2e8f0' }}>
      <h5 style={{ fontSize: 16, fontWeight: 700, color: '#f8fafc', marginBottom: 4 }}>Cronograma del Proyecto</h5>
      <p style={{ fontSize: 13, color: '#64748b', marginBottom: 6 }}>
        12 Feb – 22 May 2026 · {phases.length} tareas · {totalDays} días · 7 fases
      </p>

      {/* Legend */}
      <div style={{ display: 'flex', gap: 14, marginBottom: 16, fontSize: 10, flexWrap: 'wrap' }}>
        {Object.entries(phaseColors).map(([k, v]) => (
          <span key={k} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <span style={{ width: 10, height: 10, borderRadius: 2, background: v, display: 'inline-block' }} />
            {k === 'PlanAcción' ? 'Plan Acción' : k}
          </span>
        ))}
        <span style={{ color: '#64748b', marginLeft: 8 }}>■ Todos completados</span>
      </div>

      {/* Chart */}
      <div style={{ overflowX: 'auto', fontSize: 10 }}>
        {/* Segment headers */}
        <div style={{ display: 'flex', marginBottom: 6, paddingLeft: 320 }}>
          {segments.map((s, i) => (
            <div key={i} style={{ flex: 1, textAlign: 'center', color: '#64748b', fontWeight: 600, fontSize: 9, minWidth: 55 }}>
              {s}
            </div>
          ))}
        </div>

        {/* Tasks */}
        {phases.map((t, i) => {
          const left = pct(ganttStartDate, t.start);
          const width = wpct(t.start, t.end);

          return (
            <div key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: 2, minHeight: 40 }}>
              <div style={{ width: 320, paddingRight: 12, flexShrink: 0 }}>
                <div style={{ fontWeight: 600, fontSize: 10, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{t.title}</div>
                <div style={{ fontSize: 9, color: '#64748b' }}>
                  <span style={{ padding: '1px 5px', borderRadius: 3, background: phaseColors[t.phase] + '33', color: phaseColors[t.phase], marginRight: 6, fontWeight: 600, fontSize: 8 }}>{t.phase === 'PlanAcción' ? 'Plan Acción' : t.phase}</span>
                  {fmt(t.start)} – {fmt(t.end)}
                </div>
              </div>
              <div style={{ flex: 1, height: 28, position: 'relative' }}>
                <div style={{
                  position: 'absolute',
                  left: left + '%',
                  width: width + '%',
                  height: 20,
                  top: 4,
                  borderRadius: 4,
                  background: phaseColors[t.phase],
                  opacity: 0.85,
                }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
