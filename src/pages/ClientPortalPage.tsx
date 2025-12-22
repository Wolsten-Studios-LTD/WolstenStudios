import { useState } from 'react';
import { Check, Clock, Circle } from 'lucide-react';

export function ClientPortalPage() {
  // Mock data - in production this would come from Supabase
  const [clientData] = useState({
    clientName: "Example Company Ltd",
    sprintType: "Transformation Sprint",
    startDate: "2025-01-15",
    currentStage: 2, // 0-4 (Discovery, Strategy, Systems, Design, Launch)
    daysRemaining: 8,
  });

  const stages = [
    {
      id: 0,
      name: "Discovery",
      duration: "Days 1-3",
      description: "Deep dive into your business, goals, and challenges",
      deliverables: [
        "Stakeholder interviews completed",
        "Business audit & insights report",
        "Opportunity mapping session"
      ]
    },
    {
      id: 1,
      name: "Strategy",
      duration: "Days 4-6",
      description: "Building your transformation roadmap",
      deliverables: [
        "Strategic positioning framework",
        "Transformation roadmap",
        "Success metrics defined"
      ]
    },
    {
      id: 2,
      name: "Systems",
      duration: "Days 7-9",
      description: "Operational systems and processes",
      deliverables: [
        "Operating system design",
        "Process documentation",
        "Team playbooks"
      ]
    },
    {
      id: 3,
      name: "Design",
      duration: "Days 10-12",
      description: "Brand and visual identity refinement",
      deliverables: [
        "Brand strategy & positioning",
        "Visual identity system",
        "Brand guidelines"
      ]
    },
    {
      id: 4,
      name: "Launch",
      duration: "Days 13-14",
      description: "Implementation and handoff",
      deliverables: [
        "Final presentation & handoff",
        "Implementation roadmap",
        "30-day support plan"
      ]
    }
  ];

  const getStageStatus = (stageId: number) => {
    if (stageId < clientData.currentStage) return 'complete';
    if (stageId === clientData.currentStage) return 'active';
    return 'upcoming';
  };

  return (
    <div style={{ backgroundColor: '#FAFAFC', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ 
        backgroundColor: '#0E0E0E', 
        color: '#FAFAFC',
        padding: '3rem 1.5rem',
        borderBottom: '1px solid #2C2D2D'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '0.5rem', color: '#949797', fontSize: '0.875rem', letterSpacing: '0.05em' }}>
            CLIENT PORTAL
          </div>
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            {clientData.clientName}
          </h1>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', fontSize: '0.875rem' }}>
            <div>
              <span style={{ color: '#949797' }}>Sprint Type:</span>{' '}
              <span>{clientData.sprintType}</span>
            </div>
            <div>
              <span style={{ color: '#949797' }}>Start Date:</span>{' '}
              <span>{clientData.startDate}</span>
            </div>
            <div>
              <span style={{ color: '#949797' }}>Days Remaining:</span>{' '}
              <span style={{ color: '#2E584E' }}>{clientData.daysRemaining} days</span>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div style={{ 
        backgroundColor: '#EBEBEF', 
        padding: '2rem 1.5rem',
        borderBottom: '1px solid #DCDCE0'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '1rem', fontSize: '0.875rem', color: '#606260' }}>
            SPRINT PROGRESS
          </div>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            {stages.map((stage, index) => (
              <div key={stage.id} style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ 
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: getStageStatus(stage.id) === 'complete' ? '#2E584E' : 
                                   getStageStatus(stage.id) === 'active' ? '#0E0E0E' : '#DCDCE0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FAFAFC',
                  fontSize: '0.875rem',
                  flexShrink: 0
                }}>
                  {getStageStatus(stage.id) === 'complete' ? <Check size={20} /> : 
                   getStageStatus(stage.id) === 'active' ? <Clock size={20} /> : 
                   <Circle size={20} />}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#606260', minWidth: '60px' }}>
                  {stage.name}
                </div>
                {index < stages.length - 1 && (
                  <div style={{ 
                    flex: 1, 
                    height: '2px', 
                    backgroundColor: getStageStatus(stage.id) === 'complete' ? '#2E584E' : '#DCDCE0'
                  }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <div style={{ display: 'grid', gap: '2rem' }}>
          {stages.map((stage) => {
            const status = getStageStatus(stage.id);
            
            return (
              <div
                key={stage.id}
                style={{
                  backgroundColor: status === 'active' ? '#FFFFFF' : '#FAFAFC',
                  border: status === 'active' ? '2px solid #2E584E' : '1px solid #EBEBEF',
                  borderRadius: '8px',
                  padding: '2rem',
                  opacity: status === 'upcoming' ? 0.6 : 1
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                  <div>
                    <div style={{ 
                      display: 'inline-block',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      letterSpacing: '0.05em',
                      marginBottom: '0.75rem',
                      backgroundColor: status === 'complete' ? '#2E584E' : 
                                       status === 'active' ? '#0E0E0E' : '#EBEBEF',
                      color: status === 'upcoming' ? '#606260' : '#FAFAFC'
                    }}>
                      {status === 'complete' ? 'COMPLETED' : 
                       status === 'active' ? 'IN PROGRESS' : 'UPCOMING'}
                    </div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                      {stage.name}
                    </h3>
                    <p style={{ color: '#606260', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                      {stage.description}
                    </p>
                    <p style={{ color: '#949797', fontSize: '0.75rem' }}>
                      {stage.duration}
                    </p>
                  </div>
                </div>

                <div style={{ marginTop: '1.5rem' }}>
                  <h4 style={{ fontSize: '0.875rem', marginBottom: '1rem', color: '#606260' }}>
                    DELIVERABLES
                  </h4>
                  <div style={{ display: 'grid', gap: '0.75rem' }}>
                    {stage.deliverables.map((deliverable, index) => (
                      <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          border: `2px solid ${status === 'complete' ? '#2E584E' : '#DCDCE0'}`,
                          backgroundColor: status === 'complete' ? '#2E584E' : 'transparent',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          {status === 'complete' && <Check size={12} color="#FAFAFC" />}
                        </div>
                        <span style={{ 
                          fontSize: '0.875rem', 
                          color: status === 'complete' ? '#606260' : '#0E0E0E',
                          textDecoration: status === 'complete' ? 'line-through' : 'none'
                        }}>
                          {deliverable}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer Message */}
      <div style={{ 
        backgroundColor: '#EBEBEF', 
        padding: '2rem 1.5rem',
        borderTop: '1px solid #DCDCE0',
        marginTop: '3rem'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#606260', fontSize: '0.875rem' }}>
            Questions about your sprint? Contact your Transformation Architect anytime.
          </p>
        </div>
      </div>
    </div>
  );
}
