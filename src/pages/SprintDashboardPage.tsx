import { useState } from 'react';
import { Check, Circle, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Navigation } from '../components/Navigation';
import { colors, spacing } from '../config/theme';

export function SprintDashboardPage() {
  const [activeClient, setActiveClient] = useState(0);
  const [expandedStage, setExpandedStage] = useState<number | null>(1);

  // Mock data - in production this would come from Supabase
  const [clients] = useState([
    {
      id: 0,
      name: "Example Company Ltd",
      industry: "Technology",
      sprintType: "Transformation Sprint",
      value: "€25,000",
      startDate: "2025-01-15",
      currentStage: 1,
      daysRemaining: 8
    },
    {
      id: 1,
      name: "Another Business Co",
      industry: "Professional Services",
      sprintType: "Brand Sprint",
      value: "€18,000",
      startDate: "2025-01-20",
      currentStage: 0,
      daysRemaining: 12
    }
  ]);

  const stages = [
    {
      id: 0,
      name: "Discovery",
      duration: "Days 1-3",
      tasks: [
        { id: 0, title: "Initial kickoff call", completed: true, notes: "" },
        { id: 1, title: "Stakeholder interviews (3-5 people)", completed: true, notes: "Completed with CEO, COO, Head of Marketing" },
        { id: 2, title: "Business audit & current state analysis", completed: false, notes: "" },
        { id: 3, title: "Competitor & market research", completed: false, notes: "" },
        { id: 4, title: "Opportunity mapping workshop", completed: false, notes: "" },
        { id: 5, title: "Discovery findings presentation", completed: false, notes: "" }
      ],
      deliverables: [
        { id: 0, title: "Business Audit Report", completed: false },
        { id: 1, title: "Opportunity Map", completed: false },
        { id: 2, title: "Discovery Insights Deck", completed: false }
      ]
    },
    {
      id: 1,
      name: "Strategy",
      duration: "Days 4-6",
      tasks: [
        { id: 0, title: "Strategic positioning workshop", completed: false, notes: "" },
        { id: 1, title: "Define transformation objectives", completed: false, notes: "" },
        { id: 2, title: "Develop strategic roadmap", completed: false, notes: "" },
        { id: 3, title: "Success metrics framework", completed: false, notes: "" },
        { id: 4, title: "Strategy review & refinement", completed: false, notes: "" },
        { id: 5, title: "Strategy presentation & sign-off", completed: false, notes: "" }
      ],
      deliverables: [
        { id: 0, title: "Strategic Positioning Framework", completed: false },
        { id: 1, title: "Transformation Roadmap", completed: false },
        { id: 2, title: "Success Metrics Dashboard", completed: false }
      ]
    },
    {
      id: 2,
      name: "Systems",
      duration: "Days 7-9",
      tasks: [
        { id: 0, title: "Map current operational processes", completed: false, notes: "" },
        { id: 1, title: "Design SprintOS™ implementation", completed: false, notes: "" },
        { id: 2, title: "Create process documentation", completed: false, notes: "" },
        { id: 3, title: "Build team playbooks", completed: false, notes: "" },
        { id: 4, title: "Systems training session", completed: false, notes: "" },
        { id: 5, title: "Systems handoff & review", completed: false, notes: "" }
      ],
      deliverables: [
        { id: 0, title: "Operating System Design", completed: false },
        { id: 1, title: "Process Documentation", completed: false },
        { id: 2, title: "Team Playbooks", completed: false }
      ]
    },
    {
      id: 3,
      name: "Design",
      duration: "Days 10-12",
      tasks: [
        { id: 0, title: "Brand strategy workshop", completed: false, notes: "" },
        { id: 1, title: "Visual identity exploration", completed: false, notes: "" },
        { id: 2, title: "Design system development", completed: false, notes: "" },
        { id: 3, title: "Brand guidelines creation", completed: false, notes: "" },
        { id: 4, title: "Design review & refinement", completed: false, notes: "" },
        { id: 5, title: "Final brand presentation", completed: false, notes: "" }
      ],
      deliverables: [
        { id: 0, title: "Brand Strategy & Positioning", completed: false },
        { id: 1, title: "Visual Identity System", completed: false },
        { id: 2, title: "Brand Guidelines", completed: false }
      ]
    },
    {
      id: 4,
      name: "Launch",
      duration: "Days 13-14",
      tasks: [
        { id: 0, title: "Final deliverables package", completed: false, notes: "" },
        { id: 1, title: "Implementation roadmap", completed: false, notes: "" },
        { id: 2, title: "Team training & handoff", completed: false, notes: "" },
        { id: 3, title: "30-day support plan setup", completed: false, notes: "" },
        { id: 4, title: "Final presentation to leadership", completed: false, notes: "" },
        { id: 5, title: "Sprint retrospective", completed: false, notes: "" }
      ],
      deliverables: [
        { id: 0, title: "Complete Transformation Package", completed: false },
        { id: 1, title: "Implementation Roadmap", completed: false },
        { id: 2, title: "30-Day Support Plan", completed: false }
      ]
    }
  ];

  const client = clients[activeClient];

  const getStageStatus = (stageId: number) => {
    if (stageId < client.currentStage) return 'complete';
    if (stageId === client.currentStage) return 'active';
    return 'upcoming';
  };

  return (
    <div style={{ backgroundColor: colors.background.light, minHeight: '100vh' }}>
      <Navigation />
      
      <motion.main
        id="main-content"
        style={{ paddingTop: '80px' }}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Header */}
        <div style={{ 
          backgroundColor: colors.background.dark, 
          color: colors.text.white,
          padding: '2rem 1.5rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <div style={{ marginBottom: '0.5rem', color: colors.text.tertiary, fontSize: '0.875rem', letterSpacing: '0.05em' }}>
              SPRINT DASHBOARD
            </div>
            <h1 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>
              Internal Sprint Management
            </h1>

            {/* Client Selector */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {clients.map((c) => (
                <motion.button
                  key={c.id}
                  onClick={() => setActiveClient(c.id)}
                  style={{
                    backgroundColor: activeClient === c.id ? colors.cyan.primary : 'rgba(255, 255, 255, 0.1)',
                    color: colors.text.white,
                    padding: '0.75rem 1.5rem',
                    borderRadius: '6px',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '0.875rem',
                  }}
                  whileHover={{ 
                    y: -2,
                    backgroundColor: activeClient === c.id ? colors.cyan.bright : 'rgba(255, 255, 255, 0.15)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
                >
                  {c.name}
                </motion.button>
              ))}
              <motion.button
                style={{
                  backgroundColor: 'transparent',
                  color: colors.text.tertiary,
                  padding: '0.75rem 1.5rem',
                  borderRadius: '6px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
                whileHover={{ 
                  y: -2,
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
              >
                <Plus size={16} /> New Sprint
              </motion.button>
            </div>
          </div>
        </div>

        {/* Client Info Bar */}
        <div style={{ 
          backgroundColor: colors.border.light, 
          padding: '1.5rem',
          borderBottom: '1px solid rgba(0, 0, 0, 0.08)'
        }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', gap: '2rem', flexWrap: 'wrap', fontSize: '0.875rem' }}>
            <div>
              <span style={{ color: colors.text.tertiary }}>Industry:</span>{' '}
              <span style={{ color: colors.text.primary }}>{client.industry}</span>
            </div>
            <div>
              <span style={{ color: colors.text.tertiary }}>Sprint Type:</span>{' '}
              <span style={{ color: colors.text.primary }}>{client.sprintType}</span>
            </div>
            <div>
              <span style={{ color: colors.text.tertiary }}>Value:</span>{' '}
              <span style={{ color: colors.text.primary }}>{client.value}</span>
            </div>
            <div>
              <span style={{ color: colors.text.tertiary }}>Start Date:</span>{' '}
              <span style={{ color: colors.text.primary }}>{client.startDate}</span>
            </div>
            <div>
              <span style={{ color: colors.text.tertiary }}>Days Remaining:</span>{' '}
              <span style={{ color: colors.cyan.primary }}>{client.daysRemaining} days</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '2rem 1.5rem' }}>
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {stages.map((stage) => {
              const status = getStageStatus(stage.id);
              const isExpanded = expandedStage === stage.id;
              const completedTasks = stage.tasks.filter(t => t.completed).length;
              const totalTasks = stage.tasks.length;
              
              return (
                <motion.div
                  key={stage.id}
                  style={{
                    backgroundColor: colors.background.white,
                    border: status === 'active' ? `2px solid ${colors.cyan.primary}` : `1px solid ${colors.border.light}`,
                    borderRadius: '8px',
                    overflow: 'hidden'
                  }}
                  whileHover={!isExpanded ? { 
                    y: -2,
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
                  } : {}}
                  transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
                >
                  {/* Stage Header */}
                  <motion.button
                    onClick={() => setExpandedStage(isExpanded ? null : stage.id)}
                    style={{
                      width: '100%',
                      backgroundColor: status === 'active' ? 'rgba(0, 165, 199, 0.03)' : colors.background.light,
                      padding: '1.5rem',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      textAlign: 'left'
                    }}
                    whileHover={{ 
                      backgroundColor: status === 'active' ? 'rgba(0, 165, 199, 0.05)' : 'rgba(250, 250, 252, 0.7)'
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                        <div style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          backgroundColor: status === 'complete' ? colors.cyan.primary : 
                                           status === 'active' ? colors.background.dark : colors.border.light,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: colors.text.white,
                          fontSize: '0.875rem',
                          flexShrink: 0
                        }}>
                          {status === 'complete' ? <Check size={18} /> : <Circle size={18} />}
                        </div>
                        <h3 style={{ fontSize: '1.25rem', color: colors.text.primary }}>
                          {stage.name}
                        </h3>
                        <div style={{
                          padding: '0.25rem 0.75rem',
                          borderRadius: '4px',
                          fontSize: '0.75rem',
                          letterSpacing: '0.05em',
                          backgroundColor: status === 'complete' ? colors.cyan.primary : 
                                           status === 'active' ? colors.background.dark : colors.border.light,
                          color: status === 'upcoming' ? colors.text.secondary : colors.text.white
                        }}>
                          {stage.duration}
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.875rem', color: colors.text.secondary, marginLeft: '3rem' }}>
                        <span>{completedTasks}/{totalTasks} tasks</span>
                        <span>{stage.deliverables.length} deliverables</span>
                      </div>
                    </div>
                    <div style={{ color: colors.text.secondary }}>
                      {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    </div>
                  </motion.button>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div style={{ padding: '1.5rem', borderTop: `1px solid ${colors.border.light}` }}>
                          <div className="grid md:grid-cols-2 gap-8">
                            {/* Tasks */}
                            <div>
                              <h4 style={{ fontSize: '0.875rem', marginBottom: '1rem', color: colors.text.tertiary, letterSpacing: '0.05em' }}>
                                TASKS CHECKLIST
                              </h4>
                              <div style={{ display: 'grid', gap: '1rem' }}>
                                {stage.tasks.map((task) => (
                                  <div key={task.id}>
                                    <div style={{ display: 'flex', alignItems: 'start', gap: '0.75rem' }}>
                                      <motion.button
                                        style={{
                                          width: '20px',
                                          height: '20px',
                                          borderRadius: '4px',
                                          border: `2px solid ${task.completed ? colors.cyan.primary : colors.border.light}`,
                                          backgroundColor: task.completed ? colors.cyan.primary : 'transparent',
                                          display: 'flex',
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                          cursor: 'pointer',
                                          flexShrink: 0,
                                          marginTop: '2px'
                                        }}
                                        whileHover={{ 
                                          scale: 1.1,
                                          borderColor: task.completed ? colors.cyan.bright : colors.text.secondary
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
                                      >
                                        {task.completed && <Check size={14} color={colors.text.white} />}
                                      </motion.button>
                                      <div style={{ flex: 1 }}>
                                        <span style={{ 
                                          fontSize: '0.875rem', 
                                          color: task.completed ? colors.text.tertiary : colors.text.primary,
                                          textDecoration: task.completed ? 'line-through' : 'none'
                                        }}>
                                          {task.title}
                                        </span>
                                        {task.notes && (
                                          <p style={{ fontSize: '0.75rem', color: colors.text.tertiary, marginTop: '0.25rem' }}>
                                            {task.notes}
                                          </p>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Deliverables */}
                            <div>
                              <h4 style={{ fontSize: '0.875rem', marginBottom: '1rem', color: colors.text.tertiary, letterSpacing: '0.05em' }}>
                                DELIVERABLES
                              </h4>
                              <div style={{ display: 'grid', gap: '1rem' }}>
                                {stage.deliverables.map((deliverable) => (
                                  <div key={deliverable.id} style={{
                                    backgroundColor: colors.background.light,
                                    padding: '1rem',
                                    borderRadius: '6px',
                                    border: `1px solid ${colors.border.light}`
                                  }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                      <motion.button
                                        style={{
                                          width: '20px',
                                          height: '20px',
                                          borderRadius: '4px',
                                          border: `2px solid ${deliverable.completed ? colors.cyan.primary : colors.border.light}`,
                                          backgroundColor: deliverable.completed ? colors.cyan.primary : 'transparent',
                                          display: 'flex',
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                          cursor: 'pointer',
                                          flexShrink: 0
                                        }}
                                        whileHover={{ 
                                          scale: 1.1,
                                          borderColor: deliverable.completed ? colors.cyan.bright : colors.text.secondary
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
                                      >
                                        {deliverable.completed && <Check size={14} color={colors.text.white} />}
                                      </motion.button>
                                      <span style={{ fontSize: '0.875rem', color: colors.text.primary }}>
                                        {deliverable.title}
                                      </span>
                                    </div>
                                  </div>
                                ))}
                              </div>

                              {/* Internal Notes */}
                              <div style={{ marginTop: '1.5rem' }}>
                                <h4 style={{ fontSize: '0.875rem', marginBottom: '0.5rem', color: colors.text.tertiary, letterSpacing: '0.05em' }}>
                                  INTERNAL NOTES
                                </h4>
                                <textarea
                                  placeholder="Add stage notes, decisions, client feedback..."
                                  style={{
                                    width: '100%',
                                    minHeight: '100px',
                                    padding: '0.75rem',
                                    borderRadius: '6px',
                                    border: `1px solid ${colors.border.light}`,
                                    backgroundColor: colors.background.light,
                                    fontSize: '0.875rem',
                                    fontFamily: 'Raleway, sans-serif',
                                    resize: 'vertical',
                                    color: colors.text.primary
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.main>
    </div>
  );
}
